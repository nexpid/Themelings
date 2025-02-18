// app/modules/emojis/top_emojis/TopEmojisUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/emojis/top_emojis/TopEmojisUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: maybeFetchTopEmojisByGuild
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = null;
            if(!(michal != zuuluu)) { _fun00002_ip = 135; continue _fun00001 }
 12:
            report = _closure1_slot2;
            tangon = report.getCurrentUser;
            tangon = tangon.bind(report)();
            if(!(michal != tangon)) { _fun00002_ip = 135; continue _fun00001 }
 32:
            report = _closure1_slot3;
            tangon = report.getTopEmojisMetadata;
            tangon = tangon.bind(report)(zuuluu);
            if(!(michal != tangon)) { _fun00002_ip = 84; continue _fun00001 }
 53:
            tangon = tangon.topEmojisTTL;
            if(!(michal != tangon)) { _fun00002_ip = 139; continue _fun00001 }
 63:
            michal = global;
            report = michal.Date;
            michal = report.now;
            michal = michal.bind(report)();
            if(!(!(michal < tangon))) { _fun00002_ip = 139; continue _fun00001 }
 84:
            tangon = _closure1_slot4;
            michal = tangon.getIsFetching;
            michal = michal.bind(tangon)(zuuluu);
            if(michal) { _fun00002_ip = 135; continue _fun00001 }
 102:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 3;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.fetchTopEmojis;
            entity = entity.bind(michal)(zuuluu);
 135:
            entity = undefined;
            return entity;
 139:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['maybeFetchTopEmojisByGuild'] = michal;
    return entity;
})();