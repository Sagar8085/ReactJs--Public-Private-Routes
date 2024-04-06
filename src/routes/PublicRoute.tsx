import { Navigate } from 'react-router-dom';
import React, { useState } from 'react'

export interface PublicRouteProps {
  isVerified: boolean;
  redirectPath: string;
  children: any;
}

export default function PublicRoute(props: PublicRouteProps) {
  const { isVerified, redirectPath, children } = props;

  if (isVerified) {
    return (
      <Navigate
        to={redirectPath}
        replace
      />
    );
  }

  return children;
}
