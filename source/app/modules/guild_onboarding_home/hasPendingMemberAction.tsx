// app/modules/guild_onboarding_home/hasPendingMemberAction.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    entity = argCor;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildMemberFlags;
    var _closure1_slot9 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding_home/hasPendingMemberAction.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: hasPendingMemberAction
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot5;
            michal = zuuluu.getGuild;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            report = _closure1_slot3;
            michal = report.getChannel;
            entity = argBar;
            michal = michal.bind(report)(entity);
            oscard = null;
            entity = oscard != zuuluu;
            if(!entity) { _fun00002_ip = 50; continue _fun00001 }
 46:
            entity = oscard != michal;
 50:
            if(!entity) { _fun00002_ip = 80; continue _fun00001 }
 53:
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 7;
            report = golfie[report];
            golfie = undefined;
            report = option.bind(golfie)(report);
            entity = report.bind(golfie)(zuuluu);
 80:
            if(!entity) { _fun00002_ip = 104; continue _fun00001 }
 83:
            golfie = zuuluu.hasFeature;
            report = _closure1_slot8;
            report = report.GUILD_SERVER_GUIDE;
            entity = golfie.bind(zuuluu)(report);
 104:
            if(!entity) { _fun00002_ip = 198; continue _fun00001 }
 107:
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 8;
            golfie = golfie[report];
            report = undefined;
            option = option.bind(report)(golfie);
            golfie = option.hasFlag;
            yankee = _closure1_slot4;
            offset = yankee.getSelfMember;
            verify = zuuluu.id;
            verify = offset.bind(yankee)(verify);
            offset = oscard == verify;
            if(offset) { _fun00002_ip = 167; continue _fun00001 }
 162:
            report = verify.flags;
 167:
            verify = oscard != report;
            oscard = 0;
            if(!verify) { _fun00002_ip = 179; continue _fun00001 }
 176:
            oscard = report;
 179:
            report = _closure1_slot9;
            report = report.COMPLETED_HOME_ACTIONS;
            report = golfie.bind(option)(oscard, report);
            entity = !report;
 198:
            if(!entity) { _fun00002_ip = 229; continue _fun00001 }
 201:
            option = _closure1_slot6;
            golfie = option.hasMemberAction;
            oscard = zuuluu.id;
            report = michal.id;
            entity = golfie.bind(option)(oscard, report);
 229:
            if(!entity) { _fun00002_ip = 263; continue _fun00001 }
 232:
            report = _closure1_slot7;
            tangon = report.hasCompletedActionForChannel;
            zuuluu = zuuluu.id;
            michal = michal.id;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = !michal;
 263:
            return entity;
        }
    };
    zuuluu['hasPendingMemberAction'] = michal;
    return entity;
})();