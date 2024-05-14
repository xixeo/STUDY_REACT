import React from 'react'

export default function TrafficMain() {
  let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?'
  url = `${url}page=1&perPage=17`
  url = `${url}&serviceKey=${process.env.REACT_APP_API_KEY}`
  // 공공 api 서비스 키 노출을 막기 위해 환경변수 설정
  console.log(url)
  return (
    <div>
      교통사고
    </div>
  )
}
