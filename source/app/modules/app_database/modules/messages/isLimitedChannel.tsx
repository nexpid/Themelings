// app/modules/app_database/modules/messages/isLimitedChannel.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    tangon = function(argFoo) { // Original name: isLimitedChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = _closure1_slot1;
            report = oscard.getMemberCount;
            entity = null;
            golfie = entity == tangon;
            zuuluu = undefined;
            if(golfie) { _fun00002_ip = 32; continue _fun00001 }
 27:
            zuuluu = tangon.guild_id;
 32:
            report = report.bind(oscard)(zuuluu);
            oscard = entity != report;
            zuuluu = 0;
            if(!oscard) { _fun00002_ip = 49; continue _fun00001 }
 46:
            zuuluu = report;
 49:
            entity = entity != tangon;
            if(!entity) { _fun00002_ip = 75; continue _fun00001 }
 56:
            oscard = tangon.type;
            report = _closure1_slot2;
            report = report.DM;
            entity = oscard !== report;
 75:
            if(!entity) { _fun00002_ip = 97; continue _fun00001 }
 78:
            report = tangon.type;
            tangon = _closure1_slot2;
            tangon = tangon.GROUP_DM;
            entity = report !== tangon;
 97:
            if(!entity) { _fun00002_ip = 108; continue _fun00001 }
 100:
            michal = _closure1_slot3;
            entity = zuuluu >= michal;
 108:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = option[report];
    report = golfie.bind(entity)(report);
    report = report.ChannelTypes;
    var _closure1_slot2 = report;
    report = 10000;
    var _closure1_slot3 = report;
    oscard = 3;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/app_database/modules/messages/isLimitedChannel.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['LIMITED_GUILD_MEMBER_THRESHOLD'] = report;
    zuuluu['isLimitedChannel'] = tangon;
    michal = function(argFoo) { // Original name: isLimitedChannelId
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot4;
            tangon = _closure1_slot0;
            michal = tangon.getBasicChannel;
            entity = null;
            oscard = entity != report;
            entity = '_';
            if(!oscard) { _fun00004_ip = 36; continue _fun00003 }
 33:
            entity = report;
 36:
            michal = michal.bind(tangon)(entity);
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    zuuluu['isLimitedChannelId'] = michal;
    return entity;
})();