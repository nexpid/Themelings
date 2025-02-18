// app/modules/media_channel/useIsFirstMessageInMediaPost.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    tangon = function(argFoo) { // Original name: isFirstMessageInMediaPost
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00002_ip = 37; continue _fun00001 }
 12:
            report = _closure1_slot5;
            tangon = michal.id;
            zuuluu = michal.channel_id;
            michal = undefined;
            entity = report.bind(michal)(tangon, zuuluu);
 37:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    michal = function(argFoo, argBar) { // Original name: isFirstMessageIdInMediaPost
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argBar;
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 2;
            entity = michal[entity];
            michal = undefined;
            zuuluu = zuuluu.bind(michal)(entity);
            entity = zuuluu.castChannelIdAsMessageId;
            zuuluu = entity.bind(zuuluu)(report);
            entity = argFoo;
            if(!(entity === zuuluu)) { _fun00004_ip = 130; continue _fun00003 }
 46:
            zuuluu = _closure1_slot3;
            entity = zuuluu.getChannel;
            zuuluu = entity.bind(zuuluu)(report);
            entity = null;
            if(!(entity != zuuluu)) { _fun00004_ip = 126; continue _fun00003 }
 66:
            report = zuuluu.isForumPost;
            report = report.bind(zuuluu)();
            if(!report) { _fun00004_ip = 126; continue _fun00003 }
 79:
            report = _closure1_slot3;
            tangon = report.getChannel;
            zuuluu = zuuluu.parent_id;
            zuuluu = tangon.bind(report)(zuuluu);
            entity = entity == zuuluu;
            michal = undefined;
            if(entity) { _fun00004_ip = 118; continue _fun00003 }
 108:
            entity = zuuluu.isMediaChannel;
            michal = entity.bind(zuuluu)();
 118:
            entity = true;
            entity = entity === michal;
            return entity;
 126:
            entity = false;
            return entity;
 130:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot5 = michal;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 3;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/media_channel/useIsFirstMessageInMediaPost.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function(argFoo) { // Original name: useIsFirstMessageInMediaPost
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 1;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(0);
        entity = function() {
            zuuluu = _closure1_slot4;
            michal = _closure2_slot0;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = tangon.bind(report)(michal, entity, zuuluu);
        return entity;
    };
    zuuluu['useIsFirstMessageInMediaPost'] = report;
    zuuluu['isFirstMessageInMediaPost'] = tangon;
    zuuluu['isFirstMessageIdInMediaPost'] = michal;
    return entity;
})();