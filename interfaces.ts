interface Rect {
  readonly id: string //только для чтения
  color?: string //необязательный
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '123',
  size: {
    width: 10,
    height: 10
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '125',
  size: {
    width: 50,
    height: 5
  },
}

rect2.color = 'black'

const rect3 = {} as Rect;
const rect4 = <Rect>{}

// ================================================

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '12345',
  size: {
    width: 15,
    height: 15
  },
  getArea(): number {
    return this.size.with * this.size.height
  }
}


/// ============================================================

interface iClock {
  time: Date,
  setTime(date: Date): void
}

class Clock implements iClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

///======================================

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}
