module.exports = {
    async all(m) {
        if (!m.message) return
        this.spam = this.spam ? this.spam : {}
        if (m.sender in this.spam) {
            this.spam[m.sender].count++
            if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
                if (this.spam[m.sender].count > 1) {
                    //global.db.data.users[m.sender].banned = true
                    m.sendFile('https://cdn.discordapp.com/attachments/843656817056808981/956477814897528832/STK-20220324-WA0011.webp', 'STK-20220324-WA0011.webp')
                }
                this.spam[m.sender].count = 0
                this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
            }
        }
        else this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
    }
}
