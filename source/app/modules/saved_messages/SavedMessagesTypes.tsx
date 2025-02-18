// app/modules/saved_messages/SavedMessagesTypes.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    tangon = function(argFoo) { // Original name: savedMessageDataToClient
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            michal = zuuluu.channel_id;
            entity['channelId'] = michal;
            michal = zuuluu.message_id;
            entity['messageId'] = michal;
            tangon = global;
            oscard = tangon.Date;
            option = zuuluu.saved_at;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            verify = report;
            michal = new verify[oscard](option, golfie);
            michal = michal instanceof Object ? michal : report;
            entity['savedAt'] = michal;
            michal = zuuluu.author_summary;
            entity['authorSummary'] = michal;
            michal = zuuluu.channel_summary;
            entity['channelSummary'] = michal;
            michal = zuuluu.message_summary;
            entity['messageSummary'] = michal;
            oscard = zuuluu.guild_id;
            golfie = 0;
            report = undefined;
            if(!(golfie !== oscard)) { _fun00002_ip = 128; continue _fun00001 }
 123:
            report = zuuluu.guild_id;
 128:
            entity['guildId'] = report;
            oscard = zuuluu.author_id;
            report = undefined;
            if(!(golfie !== oscard)) { _fun00002_ip = 150; continue _fun00001 }
 144:
            report = zuuluu.author_id;
 150:
            entity['authorId'] = report;
            report = zuuluu.notes;
            entity['notes'] = report;
            oscard = zuuluu.due_at;
            report = null;
            report = report != oscard;
            michal = undefined;
            if(!report) { _fun00002_ip = 215; continue _fun00001 }
 183:
            report = tangon.Date;
            option = zuuluu.due_at;
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            verify = tangon;
            zuuluu = new verify[report](option, golfie);
            michal = zuuluu instanceof Object ? zuuluu : tangon;
 215:
            entity['dueAt'] = michal;
            return entity;
        }
    };
    var _closure1_slot2 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    report = {};
    entity = 'ALL';
    report['ALL'] = entity;
    entity = 'REMINDER';
    report['REMINDER'] = entity;
    entity = 'BOOKMARK';
    report['BOOKMARK'] = entity;
    entity = 1;
    oscard = oscard[entity];
    entity = undefined;
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/saved_messages/SavedMessagesTypes.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['SavedMessageSortTypes'] = report;
    zuuluu['savedMessageDataToClient'] = tangon;
    tangon = function(argFoo) { // Original name: savedMessageCreateObjectToClient
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = {};
            tangon = michal.message;
            zuuluu = null;
            tangon = zuuluu != tangon;
            if(!tangon) { _fun00004_ip = 59; continue _fun00003 }
 19:
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 0;
            report = report[tangon];
            tangon = undefined;
            oscard = oscard.bind(tangon)(report);
            report = oscard.createMessageRecord;
            tangon = michal.message;
            zuuluu = report.bind(oscard)(tangon);
 59:
            entity['message'] = zuuluu;
            tangon = _closure1_slot2;
            zuuluu = michal.save_data;
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            entity['saveData'] = michal;
            return entity;
        }
    };
    zuuluu['savedMessageCreateObjectToClient'] = tangon;
    michal = function(argFoo) { // Original name: savedMessageDeleteObjectToClient
        michal = argFoo;
        entity = {};
        zuuluu = michal.channel_id;
        entity['channelId'] = zuuluu;
        michal = michal.message_id;
        entity['messageId'] = michal;
        return entity;
    };
    zuuluu['savedMessageDeleteObjectToClient'] = michal;
    return entity;
})();