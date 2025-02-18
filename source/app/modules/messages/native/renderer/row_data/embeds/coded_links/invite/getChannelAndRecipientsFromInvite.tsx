// app/modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.createChannelRecordFromInvite;
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getChannelAndRecipientsFromInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.channel;
            michal = null;
            if(!(michal != entity)) { _fun00002_ip = 29; continue _fun00001 }
 14:
            entity = zuuluu.channel;
            entity = entity.recipients;
            if(!(michal == entity)) { _fun00002_ip = 35; continue _fun00001 }
 29:
            oscard = new Array(0);
            _fun00002_ip = 55; continue _fun00001;
 35:
            entity = zuuluu.channel;
            tangon = entity.recipients;
            entity = tangon.slice;
            oscard = entity.bind(tangon)();
 55:
            entity = {};
            entity['recipients_'] = oscard;
            tangon = zuuluu.channel;
            tangon = michal != tangon;
            michal = null;
            if(!tangon) { _fun00002_ip = 113; continue _fun00001 }
 76:
            report = _closure1_slot0;
            tangon = {};
            golfie = zuuluu.channel;
            option = tangon;
            zuuluu = copyDataProperties(option, golfie);
            zuuluu = 'recipients';
            tangon[zuuluu] = oscard;
            zuuluu = undefined;
            michal = report.bind(zuuluu)(tangon);
 113:
            entity['channel'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();