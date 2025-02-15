// app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.createChannelRecordFromInvite;
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getChannelAndRecipientsFromInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            entity = zulu.channel;
            mike = null;
            if(!(mike != entity)) { _fun00002_ip = 29; continue _fun00001 }
 14:
            entity = zulu.channel;
            entity = entity.recipients;
            if(!(mike == entity)) { _fun00002_ip = 35; continue _fun00001 }
 29:
            oscar = new Array(0);
            _fun00002_ip = 55; continue _fun00001;
 35:
            entity = zulu.channel;
            tango = entity.recipients;
            entity = tango.slice;
            oscar = entity.bind(tango)();
 55:
            entity = {};
            entity['recipients_'] = oscar;
            tango = zulu.channel;
            tango = mike != tango;
            mike = null;
            if(!tango) { _fun00002_ip = 113; continue _fun00001 }
 76:
            report = _closure1_slot0;
            tango = {};
            golf = zulu.channel;
            options = tango;
            zulu = copyDataProperties(options, golf);
            zulu = 'recipients';
            tango[zulu] = oscar;
            zulu = undefined;
            mike = report.bind(zulu)(tango);
 113:
            entity['channel'] = mike;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();