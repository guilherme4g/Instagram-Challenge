import axios from "axios";

const instagramBasicApiUrl = axios.create({
  baseURL: 'https://graph.instagram.com',
  timeout: 5000
});

export default async (userToken: string) => {
  const user = await instagramBasicApiUrl.get(`/me`, 
    {
      params: {
        fields: "id,account_type,media_count,username",
        access_token: userToken
      },
      timeout: 5000
  }).catch(res => {  throw Error("error connecting instagram API") });

  const media = await instagramBasicApiUrl.get(`/me/media`, 
  {
    params: {
      fields: "id,timestamp,media_type,permalink,media_url,caption",
      access_token: userToken
    },
    timeout: 5000
  }).catch(res => { throw Error("error connecting instagram API") });

  return {
    profile: user.data,
    media: media.data.data
  }
};