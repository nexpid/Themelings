// app/modules/saved_messages/SavedMessagesTypes.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    tango = function(argFoo) { // Original name: savedMessageDataToClient
        _fun88986: for(var _fun88986_ip = 0; ; ) switch(_fun88986_ip) {
 0:
            zulu = argFoo;
            entity = {};
            mike = zulu.channel_id;
            entity['channelId'] = mike;
            mike = zulu.message_id;
            entity['messageId'] = mike;
            tango = global;
            oscar = tango.Date;
            options = zulu.saved_at;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            verify = report;
            mike = new verify[oscar](options, golf);
            mike = mike instanceof Object ? mike : report;
            entity['savedAt'] = mike;
            mike = zulu.author_summary;
            entity['authorSummary'] = mike;
            mike = zulu.channel_summary;
            entity['channelSummary'] = mike;
            mike = zulu.message_summary;
            entity['messageSummary'] = mike;
            oscar = zulu.guild_id;
            golf = 0;
            report = undefined;
            if(!(golf !== oscar)) { _fun88986_ip = 128; continue _fun88986 }
 123:
            report = zulu.guild_id;
 128:
            entity['guildId'] = report;
            oscar = zulu.author_id;
            report = undefined;
            if(!(golf !== oscar)) { _fun88986_ip = 150; continue _fun88986 }
 144:
            report = zulu.author_id;
 150:
            entity['authorId'] = report;
            report = zulu.notes;
            entity['notes'] = report;
            oscar = zulu.due_at;
            report = null;
            report = report != oscar;
            mike = undefined;
            if(!report) { _fun88986_ip = 215; continue _fun88986 }
 183:
            report = tango.Date;
            options = zulu.due_at;
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            verify = tango;
            zulu = new verify[report](options, golf);
            mike = zulu instanceof Object ? zulu : tango;
 215:
            entity['dueAt'] = mike;
            return entity;
        }
    };
    var _closure1_slot2 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    report = {};
    entity = 'ALL';
    report['ALL'] = entity;
    entity = 'REMINDER';
    report['REMINDER'] = entity;
    entity = 'BOOKMARK';
    report['BOOKMARK'] = entity;
    entity = 1;
    oscar = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/saved_messages/SavedMessagesTypes.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['SavedMessageSortTypes'] = report;
    zulu['savedMessageDataToClient'] = tango;
    tango = function(argFoo) { // Original name: savedMessageCreateObjectToClient
        _fun88987: for(var _fun88987_ip = 0; ; ) switch(_fun88987_ip) {
 0:
            mike = argFoo;
            entity = {};
            tango = mike.message;
            zulu = null;
            tango = zulu != tango;
            if(!tango) { _fun88987_ip = 59; continue _fun88987 }
 19:
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 0;
            report = report[tango];
            tango = undefined;
            oscar = oscar.bind(tango)(report);
            report = oscar.createMessageRecord;
            tango = mike.message;
            zulu = report.bind(oscar)(tango);
 59:
            entity['message'] = zulu;
            tango = _closure1_slot2;
            zulu = mike.save_data;
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            entity['saveData'] = mike;
            return entity;
        }
    };
    zulu['savedMessageCreateObjectToClient'] = tango;
    mike = function(argFoo) { // Original name: savedMessageDeleteObjectToClient
        mike = argFoo;
        entity = {};
        zulu = mike.channel_id;
        entity['channelId'] = zulu;
        mike = mike.message_id;
        entity['messageId'] = mike;
        return entity;
    };
    zulu['savedMessageDeleteObjectToClient'] = mike;
    return entity;
})();