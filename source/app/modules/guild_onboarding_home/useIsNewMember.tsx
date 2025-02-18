// app/modules/guild_onboarding_home/useIsNewMember.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _getIsNewMember
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            zuuluu = argBar;
            michal = argBaz;
            entity = michal.isFullServerPreview;
            entity = entity.bind(michal)(report);
            if(entity) { _fun00002_ip = 215; continue _fun00001 }
 26:
            entity = zuuluu.getSelfMember;
            michal = entity.bind(zuuluu)(report);
            tangon = null;
            if(!(tangon != michal)) { _fun00002_ip = 211; continue _fun00001 }
 46:
            entity = zuuluu.getSelfMemberJoinedAt;
            golfie = entity.bind(zuuluu)(report);
            entity = tangon != golfie;
            if(!entity) { _fun00002_ip = 209; continue _fun00001 }
 69:
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            report = 3;
            report = oscard[report];
            oscard = undefined;
            option = option.bind(oscard)(report);
            report = option.hasFlag;
            michal = michal.flags;
            verify = tangon != michal;
            tangon = 0;
            if(!verify) { _fun00002_ip = 117; continue _fun00001 }
 114:
            tangon = michal;
 117:
            michal = _closure1_slot5;
            michal = michal.COMPLETED_HOME_ACTIONS;
            michal = report.bind(option)(tangon, michal);
            michal = !michal;
            if(!michal) { _fun00002_ip = 206; continue _fun00001 }
 139:
            tangon = global;
            report = tangon.Date;
            tangon = report.now;
            report = tangon.bind(report)();
            tangon = golfie.getTime;
            tangon = tangon.bind(golfie)();
            tangon = report - tangon;
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 4;
            zuuluu = golfie[zuuluu];
            zuuluu = report.bind(oscard)(zuuluu);
            zuuluu = zuuluu.Millis;
            zuuluu = zuuluu.WEEK;
            michal = tangon < zuuluu;
 206:
            entity = michal;
 209:
            return entity;
 211:
            entity = false;
            return entity;
 215:
            entity = true;
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildMemberFlags;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding_home/useIsNewMember.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useIsNewMember
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 5;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot4;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot3;
        michal[1] = report;
        entity = function() {
            report = _closure1_slot6;
            tangon = _closure2_slot0;
            zuuluu = _closure1_slot4;
            michal = _closure1_slot3;
            entity = undefined;
            entity = report.bind(entity)(tangon, zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: getIsNewMember
        report = _closure1_slot6;
        tangon = _closure1_slot4;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = argFoo;
        entity = report.bind(michal)(entity, tangon, zuuluu);
        return entity;
    };
    zuuluu['getIsNewMember'] = michal;
    return entity;
})();