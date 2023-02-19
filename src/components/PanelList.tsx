import React from 'react'
import Panel from './Panel'

const PanelList = () => {
  return (
    <div className="mt-6 relative rounded-3xl bg-purple-50">
        <Panel panelNumber={1} title="First tab panel" />
        <Panel panelNumber={2} title="Second tab panel" />
        <Panel panelNumber={3} title="Third tab panel" />
    </div>
  )
}

export default PanelList