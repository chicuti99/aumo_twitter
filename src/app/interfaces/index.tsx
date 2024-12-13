import React from "react";
import { SetStateAction } from "react";

export interface followerMenu  {
    setFollowersList: React.Dispatch<SetStateAction<boolean>>
}

export interface User {
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      city: string;
      state: string;
      country: string;
    };
    email: string;
    login: {
      uuid: string;
      username: string;
      password: string;
      salt: string;
      md5: string;
      sha1: string;
      sha256: string;
    };
    registered: {
      date: string;
      age: number;
    };
    phone: string;
    cell: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
  }

  export interface RecommendationProps {
    login: {
      username: string;
    };
    picture: {
      thumbnail: string;
    };

    name : {
        first:string;
        last:string;
    }
  }