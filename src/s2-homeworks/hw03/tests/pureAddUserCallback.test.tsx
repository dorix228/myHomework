import React from 'react'
import {pureAddUserCallback} from '../HW3'

let initialState: any[]
const setName = (a: any[]) => {
    initialState = a
}

beforeEach(() => {
    initialState = []
})

test('name 1', () => {
    expect(initialState.length).toBe(1)
    expect(initialState[0].name).toBe('name')
    expect(!!initialState[0]._id).toBe(true)
})
