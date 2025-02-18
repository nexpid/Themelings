// app/modules/launchpad/native/isGuildSelectable.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/launchpad/native/isGuildSelectable.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: isGuildSelectable
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            var _closure2_slot0 = verify;
            michal = _closure1_slot3;
            entity = michal.isMuted;
            entity = entity.bind(michal)(verify);
            entity = !entity;
            if(!entity) { _fun00002_ip = 148; continue _fun00001 }
 33:
            zuuluu = _closure1_slot2;
            michal = zuuluu.hasUnread;
            michal = michal.bind(zuuluu)(verify);
            zuuluu = !michal;
            michal = !zuuluu;
            if(!zuuluu) { _fun00002_ip = 145; continue _fun00001 }
 57:
            zuuluu = global;
            golfie = zuuluu.Object;
            oscard = golfie.keys;
            option = _closure1_slot0;
            zuuluu = option.getStageInstancesByGuild;
            zuuluu = zuuluu.bind(option)(verify);
            zuuluu = oscard.bind(golfie)(zuuluu);
            oscard = zuuluu.length;
            zuuluu = 0;
            zuuluu = oscard > zuuluu;
            if(zuuluu) { _fun00002_ip = 142; continue _fun00001 }
 104:
            oscard = _closure1_slot1;
            report = oscard.getAllApplicationStreams;
            oscard = report.bind(oscard)();
            report = oscard.some;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.guildId;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            tangon = !tangon;
            zuuluu = !tangon;
 142:
            michal = zuuluu;
 145:
            entity = michal;
 148:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();