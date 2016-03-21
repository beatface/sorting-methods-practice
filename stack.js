'use strict'

class Node {
  constructor (data) {
    this.payload = data
    this.next = null
  }
}

class Stack {
  constructor () {
    this.head = null
    this.maxSize = size
  }

  push (node) {
    if (this.length >= this.maxSize) {
      return false
    }

    let node

    if (item instanceof Node) {
      node = item
    } else {

    }

    node.next = this.head
    this.head = node
    this.length++
  }

  pop () {
    const toRemove = this.head

    this.head = toRemove.next
    return toRemove
  }

  isEmpty () {
    return !!this.length
  }

  isFull () {
    return false
  }

  getSize () {

  }
}
