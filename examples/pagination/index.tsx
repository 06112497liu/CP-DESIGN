import * as React from 'react'
import { Pagination, Row, Col } from '../../src/components'
const { useState } = React
export default function PaginationDemo() {
  const [current1, setCurrent1] = useState(1)
  const [current2, setCurrent2] = useState(1)
  const [current3, setCurrent3] = useState(1)
  const onChange1 = (page: string | number) => {
    if (typeof page === 'string') {
      setCurrent1(Number(page))
    } else {
      setCurrent1(page)
    }
  }
  const onChange2 = (page: string | number) => {
    if (typeof page === 'string') {
      setCurrent2(Number(page))
    } else {
      setCurrent2(page)
    }
  }
  const onChange3 = (page: string | number) => {
    if (typeof page === 'string') {
      setCurrent3(Number(page))
    } else {
      setCurrent3(page)
    }
  }
  return (
    <div>
      <h1>Pagination 分页器</h1>
      <h3>基本</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Pagination total={5} current={current1} pageSize={1} onChange={onChange1} size="large" />
        </Col>
      </Row>
      <h3>Hide number</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Pagination
            total={5}
            current={current2}
            onChange={onChange2}
            pageSize={1}
            size="large"
            simple
          />
        </Col>
      </Row>
      <h3>Point style</h3>
      <Row style={{ marginBottom: '1rem' }}>
        <Col span={24}>
          <Pagination
            total={5}
            current={current3}
            onChange={onChange3}
            pageSize={1}
            mode={'pointer'}
          />
        </Col>
      </Row>
    </div>
  )
}
