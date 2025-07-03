// app/modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx
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
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildFeatures;
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildMemberFlags;
    var _closure1_slot6 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useCanSeeNUFChannelsForGuild
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 5;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        golfie = _closure1_slot4;
        zuuluu = new Array(3);
        zuuluu[0] = golfie;
        golfie = _closure1_slot3;
        zuuluu[1] = golfie;
        michal = _closure1_slot2;
        zuuluu[2] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot4;
                entity = zuuluu.getCurrentUser;
                report = entity.bind(zuuluu)();
                zuuluu = null;
                if(!(zuuluu != report)) { _fun00002_ip = 312; continue _fun00001 }
 25:
                tangon = _closure1_slot0;
                oscard = _closure1_slot1;
                entity = 6;
                entity = oscard[entity];
                golfie = undefined;
                tangon = tangon.bind(golfie)(entity);
                entity = tangon.isNewUser;
                entity = entity.bind(tangon)(report);
                if(!entity) { _fun00002_ip = 312; continue _fun00001 }
 64:
                oscard = _closure1_slot3;
                report = oscard.getGuild;
                entity = _closure2_slot0;
                entity = report.bind(oscard)(entity);
                if(!(zuuluu != entity)) { _fun00002_ip = 308; continue _fun00001 }
 92:
                option = entity.features;
                oscard = option.has;
                report = _closure1_slot5;
                report = report.HUB;
                report = oscard.bind(option)(report);
                if(report) { _fun00002_ip = 308; continue _fun00001 }
 124:
                oscard = _closure1_slot2;
                report = oscard.getSelfMember;
                tangon = _closure2_slot0;
                oscard = report.bind(oscard)(tangon);
                report = entity.features;
                tangon = report.has;
                entity = _closure1_slot5;
                entity = entity.GUILD_ONBOARDING;
                entity = tangon.bind(report)(entity);
                if(!entity) { _fun00002_ip = 176; continue _fun00001 }
 172:
                entity = zuuluu != oscard;
 176:
                if(!entity) { _fun00002_ip = 238; continue _fun00001 }
 179:
                report = _closure1_slot0;
                option = _closure1_slot1;
                tangon = 7;
                tangon = option[tangon];
                verify = report.bind(golfie)(tangon);
                option = verify.hasFlag;
                tangon = oscard.flags;
                offset = zuuluu != tangon;
                report = 0;
                if(!offset) { _fun00002_ip = 222; continue _fun00001 }
 219:
                report = tangon;
 222:
                tangon = _closure1_slot6;
                tangon = tangon.STARTED_ONBOARDING;
                entity = option.bind(verify)(report, tangon);
 238:
                if(!entity) { _fun00002_ip = 303; continue _fun00001 }
 241:
                report = _closure1_slot0;
                option = _closure1_slot1;
                tangon = 7;
                tangon = option[tangon];
                report = report.bind(golfie)(tangon);
                tangon = report.hasFlag;
                oscard = oscard.flags;
                golfie = zuuluu != oscard;
                zuuluu = 0;
                if(!golfie) { _fun00002_ip = 284; continue _fun00001 }
 281:
                zuuluu = oscard;
 284:
                michal = _closure1_slot6;
                michal = michal.COMPLETED_ONBOARDING;
                michal = tangon.bind(report)(zuuluu, michal);
                entity = !michal;
 303:
                entity = !entity;
                return entity;
 308:
                entity = false;
                return entity;
 312:
                entity = false;
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useCanSeeNUFChannelsForGuild'] = michal;
    return entity;
})();