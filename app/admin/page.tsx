'use client'
import { ResponsiveLine } from '@nivo/line'
import { ResponsiveBar } from '@nivo/bar'


export default function Home() {
  const data = [
    {
      "id": "족제비",
      "color": "hsl(198, 70%, 50%)",
      "data": [
        {
          "x": "2022.04.01",
          "y": 53
        },
        {
          "x": "2022.10.01",
          "y": 25
        },
        {
          "x": "2023.04.01",
          "y": 37
        },
        {
          "x": "2023.10.01",
          "y": 75        },
      ]
    },
    {
      "id": "두꺼비",
      "color": "hsl(30, 70%, 50%)",
      "data": [
        {
          "x": "2022.04.01",
          "y": 30
        },
        {
          "x": "2022.10.01",
          "y": 47
        },
        {
          "x": "2023.04.01",
          "y": 55
        },
        {
          "x": "2023.10.01",
          "y": 44        },
      ]
    },
    {
      "id": "제비",
      "color": "hsl(360, 70%, 50%)",
      "data": [
        {
          "x": "2022.04.01",
          "y": 25
        },
        {
          "x": "2022.10.01",
          "y": 50
        },
        {
          "x": "2023.04.01",
          "y": 37
        },
        {
          "x": "2023.10.01",
          "y": 22        },
      ]
    },
  ]  
  const data2 = [
    {
      "season": "봄",
      "식물": 60,
      "hot dogColor": "hsl(22, 70%, 50%)",
      "포유류": 80,
      "burgerColor": "hsl(111, 70%, 50%)",
      "어류": 42,
      "sandwichColor": "hsl(38, 70%, 50%)",
    },
    {
      "season": "여름",
      "식물": 70,
      "hot dogColor": "hsl(75, 70%, 50%)",
      "포유류": 43,
      "burgerColor": "hsl(348, 70%, 50%)",
      "어류": 21,
      "sandwichColor": "hsl(313, 70%, 50%)",
    },
    {
      "season": "가을",
      "식물": 55,
      "hot dogColor": "hsl(25, 70%, 50%)",
      "포유류": 56,
      "burgerColor": "hsl(228, 70%, 50%)",
      "어류": 51,
      "sandwichColor": "hsl(252, 70%, 50%)",
    },
    {
      "season": "겨울",
      "식물": 15,
      "hot dogColor": "hsl(104, 70%, 50%)",
      "포유류": 21,
      "burgerColor": "hsl(166, 70%, 50%)",
      "어류": 35,
      "sandwichColor": "hsl(317, 70%, 50%)",
    },
  ]
  return (
    <main className="flex flex-row min-h-screen h-screen">
      <div className="basis-80 h-full bg-slate-800 flex flex-col">
      <div className=" w-full text-zinc-200 inline-block leading-10 p-2 text-2xl font-bold">Admin</div>
        <div className=" w-full text-zinc-200 inline-block leading-10 p-4 text-lg mt-20 bg-slate-600">통계</div>
        <div className=" w-full text-zinc-200 inline-block leading-10 p-4 text-lg">유저 정보</div>
        <div className=" w-full text-zinc-200 inline-block leading-10 p-4 text-lg">설정</div>
      </div>
      <div className="grow h-full">
        <div className="grid grid-cols-2 gap-4 m-12">
            <div className='bg-white h-96 rounded-md shadow-lg'>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{
                    type: 'linear',
                    min: 'auto',
                    max: 'auto',
                    stacked: false,
                    reverse: false
                }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '개체 수 변화',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
            </div>
            <div className=' bg-white h-96 rounded-md shadow-lg'>
            <ResponsiveBar
              data={data2}
              keys={[
                  '식물',
                  '포유류',
                  '어류',
              ]}
              indexBy="season"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              colors={{ scheme: 'nivo' }}
              defs={[
                  {
                      id: 'dots',
                      type: 'patternDots',
                      background: 'inherit',
                      color: '#38bcb2',
                      size: 4,
                      padding: 1,
                      stagger: true
                  },
                  {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: '#eed312',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10
                  }
              ]}
              fill={[
                  {
                      match: {
                          id: 'fries'
                      },
                      id: 'dots'
                  },
                  {
                      match: {
                          id: 'sandwich'
                      },
                      id: 'lines'
                  }
              ]}
              borderColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          1.6
                      ]
                  ]
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'season',
                  legendPosition: 'middle',
                  legendOffset: 32
              }}
              axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'food',
                  legendPosition: 'middle',
                  legendOffset: -40
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          1.6
                      ]
                  ]
              }}
              legends={[
                  {
                      dataFrom: 'keys',
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: 'left-to-right',
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemOpacity: 1
                              }
                          }
                      ]
                  }
              ]}
              role="application"
              ariaLabel="Nivo bar chart demo"
              barAriaLabel={e=>e.id+": "+e.formattedValue+" in season: "+e.indexValue}
          />
            </div>
        </div>
      </div>
    </main>
  )
}
