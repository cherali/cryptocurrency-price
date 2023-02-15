import { convertToUrlString } from 'utils/helpers'
import { getDescendantProp } from 'utils/string'

describe('unit tests', () => {
  it('utils - helpers', () => {
    // simple
    const data1 = {
      name: 'test'
    }

    // with 2 data
    const data2 = {
      title: 'example',
      value: 500,
    }

    // with empty value
    const data3 = {
      a: 'value-a',
      b: 1,
      c: true,
      d: '',
      e: undefined,
      f: null,
    }

    // value - empty - value
    const data4 = {
      ...data3,
      q: 'q'
    }

    const res1 = convertToUrlString(data1)
    const res2 = convertToUrlString(data2)
    const res3 = convertToUrlString(data3)
    const res4 = convertToUrlString(data4)

    expect(res1).to.be.eq('name=test', 'test 1')
    expect(res2).to.be.eq('title=example&value=500', 'test 2')
    expect(res3).to.be.eq('a=value-a&b=1&c=true', 'test 3')
    expect(res4).to.be.eq('a=value-a&b=1&c=true&q=q', 'test 4')
  })

  it('utils - string', () => {
    const obj = {
      name: 'name',
      phone: '1111',
      user: {
        name: 'name-user',
        email: 'text@example.com',
        depth: {
          a: 'a'
        }
      }
    }


    const res1 = getDescendantProp<string>(obj, 'name')
    const res2 = getDescendantProp<string>(obj, 'user.name')
    const res3 = getDescendantProp<string>(obj, 'user.depth.a')
    const res4 = getDescendantProp<string>(obj, 'user.depth.a.notexist')

    expect(res1).to.be.eq(obj.name, '- name')
    expect(res2).to.be.eq(obj.user.name, 'user- name')
    expect(res3).to.be.eq(obj.user.depth.a, 'a - depth - use- name')
    expect(res4).to.be.eq(undefined, 'not exist - a - depth - use- name')
  })
})