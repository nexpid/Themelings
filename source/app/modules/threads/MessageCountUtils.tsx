// app/modules/threads/MessageCountUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = option;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    report = tangon.MAX_THREAD_MESSAGE_COUNT;
    var _closure1_slot3 = report;
    tangon = tangon.MAX_THREAD_MESSAGE_COUNT_OLD;
    var _closure1_slot4 = tangon;
    report = function(argFoo) { // Original name: shouldUseOldMaxMessageCount
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 1;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.compare;
        michal = '992549565104128000';
        entity = argFoo;
        michal = zuuluu.bind(tangon)(michal, entity);
        entity = -1;
        entity = michal > entity;
        return entity;
    };
    var _closure1_slot5 = report;
    tangon = function(argFoo, argBar) { // Original name: getMessageCountText
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00002_ip = 100; continue _fun00001 }
 12:
            entity = 0;
            if(!(!(report < entity))) { _fun00002_ip = 100; continue _fun00001 }
 18:
            oscard = _closure1_slot5;
            entity = undefined;
            entity = oscard.bind(entity)(tangon);
            if(!(zuuluu != tangon)) { _fun00002_ip = 39; continue _fun00001 }
 36:
            if(!entity) { _fun00002_ip = 56; continue _fun00001 }
 39:
            entity = _closure1_slot4;
            zuuluu = report >= entity;
            entity = '50+';
            if(zuuluu) { _fun00002_ip = 98; continue _fun00001 }
 56:
            michal = _closure1_slot3;
            zuuluu = report >= michal;
            michal = '100k+';
            if(zuuluu) { _fun00002_ip = 95; continue _fun00001 }
 73:
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = '';
            michal = tangon.bind(zuuluu)(report);
 95:
            entity = michal;
 98:
            return entity;
 100:
            entity = '0';
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    oscard = function(argFoo, argBar, argBaz) { // Original name: _formatMessageCountLabel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot6;
            oscard = undefined;
            zuuluu = argFoo;
            entity = argBaz;
            entity = tangon.bind(oscard)(zuuluu, entity);
            zuuluu = '0';
            if(!(zuuluu !== entity)) { _fun00004_ip = 78; continue _fun00003 }
 31:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 2;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(oscard)(zuuluu);
            report = zuuluu.intl;
            tangon = report.formatToPlainString;
            zuuluu = {};
            zuuluu['count'] = entity;
            entity = argBar;
            entity = tangon.bind(report)(entity, zuuluu);
            _fun00004_ip = 135; continue _fun00003;
 78:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 2;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.eXHkho;
            entity = zuuluu.bind(tangon)(michal);
 135:
            return entity;
        }
    };
    var _closure1_slot7 = oscard;
    oscard = 3;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/threads/MessageCountUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['shouldUseOldMaxMessageCount'] = report;
    zuuluu['getMessageCountText'] = tangon;
    tangon = function(argFoo, argBar) {
        report = _closure1_slot7;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 2;
        entity = zuuluu[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        entity = entity.t;
        zuuluu = entity.iTS3XV;
        michal = argFoo;
        entity = argBar;
        entity = report.bind(tangon)(michal, zuuluu, entity);
        return entity;
    };
    zuuluu['formatMobileMessageCountLabel'] = tangon;
    michal = function(argFoo, argBar) {
        report = _closure1_slot7;
        michal = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 2;
        entity = zuuluu[entity];
        tangon = undefined;
        entity = michal.bind(tangon)(entity);
        entity = entity.t;
        zuuluu = entity.rfAXDQ;
        michal = argFoo;
        entity = argBar;
        entity = report.bind(tangon)(michal, zuuluu, entity);
        return entity;
    };
    zuuluu['formatMessageCountLabel'] = michal;
    return entity;
})();