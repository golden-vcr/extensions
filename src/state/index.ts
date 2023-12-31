import { parseBroadcastState, type BroadcastState } from "./api"
import { buildUrl } from "../config"

export { type BroadcastState } from "./api"

export class BroadcastStateEventSource extends EventSource {
  constructor(onStateChange: (s: BroadcastState) => void, onError: (err: unknown) => void) {
    const url = buildUrl('/api/showtime/state')
    super(url)
    this.addEventListener('message', (ev) => {
      let newState: BroadcastState
      try {
        const data = JSON.parse(ev.data)
        newState = parseBroadcastState(data)
      } catch (err) {
        onError(err)
        return
      }
      onStateChange(newState)
    })
  }
}
