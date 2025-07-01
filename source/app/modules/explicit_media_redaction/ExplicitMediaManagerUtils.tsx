// app/modules/explicit_media_redaction/ExplicitMediaManagerUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = function(argFoo) { // Original name: hasAttachmentsEmbedsOrComponents
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.attachments;
            tangon = null;
            entity = tangon != entity;
            if(!entity) { _fun00002_ip = 35; continue _fun00001 }
 18:
            michal = zuuluu.attachments;
            report = michal.length;
            michal = 0;
            entity = report > michal;
 35:
            if(entity) { _fun00002_ip = 71; continue _fun00001 }
 38:
            michal = zuuluu.embeds;
            michal = tangon != michal;
            if(!michal) { _fun00002_ip = 68; continue _fun00001 }
 51:
            report = zuuluu.embeds;
            oscard = report.length;
            report = 0;
            michal = oscard > report;
 68:
            entity = michal;
 71:
            if(entity) { _fun00002_ip = 107; continue _fun00001 }
 74:
            michal = zuuluu.components;
            michal = tangon != michal;
            if(!michal) { _fun00002_ip = 104; continue _fun00001 }
 87:
            zuuluu = zuuluu.components;
            tangon = zuuluu.length;
            zuuluu = 0;
            michal = tangon > zuuluu;
 104:
            entity = michal;
 107:
            return entity;
        }
    };
    var _closure1_slot0 = entity;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/explicit_media_redaction/ExplicitMediaManagerUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: hasAttachmentsEmbedsComponentsOrSnapshots
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            tangon = null;
            if(!(tangon != michal)) { _fun00004_ip = 93; continue _fun00003 }
 9:
            entity = 'messageSnapshots';
            entity = entity in michal;
            if(entity) { _fun00004_ip = 28; continue _fun00003 }
 20:
            oscard = michal.message_snapshots;
            _fun00004_ip = 34; continue _fun00003;
 28:
            oscard = michal.messageSnapshots;
 34:
            entity = _closure1_slot0;
            zuuluu = undefined;
            entity = entity.bind(zuuluu)(michal);
            if(entity) { _fun00004_ip = 91; continue _fun00003 }
 51:
            michal = tangon != oscard;
            if(!michal) { _fun00004_ip = 88; continue _fun00003 }
 58:
            tangon = tangon == oscard;
            zuuluu = undefined;
            if(tangon) { _fun00004_ip = 85; continue _fun00003 }
 67:
            report = oscard.some;
            tangon = function(argFoo) {
                zuuluu = _closure1_slot0;
                entity = argFoo;
                michal = entity.message;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            zuuluu = report.bind(oscard)(tangon);
 85:
            michal = zuuluu;
 88:
            entity = michal;
 91:
            return entity;
 93:
            entity = false;
            return entity;
        }
    };
    zuuluu['hasAttachmentsEmbedsComponentsOrSnapshots'] = michal;
    return entity;
})();