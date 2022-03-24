module.exports = {
    async all(m, { conn }) {
        if (!m.message) return
        this.spam = this.spam ? this.spam : {}
        if (m.sender in this.spam) {
            this.spam[m.sender].count++
            if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
                if (this.spam[m.sender].count > 10) {
                    //global.db.data.users[m.sender].banned = true
                    conn.sendFile(m.chat, https://cdn.discordapp.com/attachments/843656817056808981/956477814897528832/STK-20220324-WA0011.webp, 'STK-20220324-WA0011.webp', '', m)
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
