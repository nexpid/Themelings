// app/modules/guild_onboarding_home/OnboardingHomeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: canSeeOnboardingHomeInPreview
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = tangon.id;
            zuuluu = _closure1_slot6;
            entity = zuuluu.getNewMemberActions;
            entity = entity.bind(zuuluu)(oscard);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00002_ip = 36; continue _fun00001 }
 32:
            entity = new Array(0);
 36:
            zuuluu = entity.length;
            entity = 0;
            entity = zuuluu > entity;
            report = _closure1_slot6;
            zuuluu = report.getEnabled;
            zuuluu = zuuluu.bind(report)(oscard);
            if(!entity) { _fun00002_ip = 91; continue _fun00001 }
 65:
            golfie = tangon.features;
            oscard = golfie.has;
            report = _closure1_slot8;
            report = report.COMMUNITY;
            entity = oscard.bind(golfie)(report);
 91:
            if(!entity) { _fun00002_ip = 129; continue _fun00001 }
 94:
            report = tangon.features;
            tangon = report.has;
            michal = _closure1_slot8;
            michal = michal.GUILD_ONBOARDING;
            michal = tangon.bind(report)(michal);
            if(!michal) { _fun00002_ip = 126; continue _fun00001 }
 123:
            michal = !zuuluu;
 126:
            entity = !michal;
 129:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: hasResourceChannels
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argBar;
            michal = zuuluu.getMutableGuildChannelsForGuild;
            entity = argFoo;
            option = michal.bind(zuuluu)(entity);
            oscard = option;
            for(zuuluu in oscard)
 31:
            {
 40:
                entity = zuuluu;
                offset = option[entity];
                verify = offset.hasFlag;
                entity = _closure1_slot10;
                entity = entity.IS_GUILD_RESOURCE_CHANNEL;
                entity = verify.bind(offset)(entity);
                if(!entity) { _fun00004_ip = 31; continue _fun00003 }
 71:
                entity = true;
                return entity;
            }
 75:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
    tangon = report.bind(entity)(tangon);
    golfie = tangon.FAVORITES;
    var _closure1_slot7 = golfie;
    golfie = tangon.GuildFeatures;
    var _closure1_slot8 = golfie;
    tangon = tangon.ME;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelFlags;
    var _closure1_slot10 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding_home/OnboardingHomeUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useCanSeeOnboardingHome
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        tangon = _closure1_slot1;
        option = _closure1_slot2;
        zuuluu = 6;
        zuuluu = option[zuuluu];
        report = undefined;
        zuuluu = tangon.bind(report)(zuuluu);
        oscard = zuuluu.bind(report)(golfie);
        var _closure2_slot1 = oscard;
        tangon = _closure1_slot0;
        zuuluu = 7;
        zuuluu = option[zuuluu];
        report = tangon.bind(report)(zuuluu);
        tangon = report.useStateFromStores;
        option = _closure1_slot4;
        zuuluu = new Array(3);
        zuuluu[0] = option;
        option = _closure1_slot5;
        zuuluu[1] = option;
        michal = _closure1_slot3;
        zuuluu[2] = michal;
        michal = new Array(2);
        michal[0] = golfie;
        michal[1] = oscard;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure2_slot0;
                entity = _closure1_slot9;
                if(!(michal !== entity)) { _fun00006_ip = 243; continue _fun00005 }
 21:
                michal = _closure2_slot0;
                entity = _closure1_slot7;
                if(!(michal !== entity)) { _fun00006_ip = 243; continue _fun00005 }
 36:
                tangon = _closure1_slot5;
                michal = tangon.getGuild;
                entity = _closure2_slot0;
                report = michal.bind(tangon)(entity);
                entity = null;
                michal = entity == report;
                if(michal) { _fun00006_ip = 92; continue _fun00005 }
 63:
                golfie = report.features;
                tangon = golfie.has;
                entity = _closure1_slot8;
                entity = entity.COMMUNITY;
                entity = tangon.bind(golfie)(entity);
                michal = !entity;
 92:
                entity = !michal;
                if(michal) { _fun00006_ip = 241; continue _fun00005 }
 101:
                golfie = _closure1_slot3;
                tangon = golfie.isFullServerPreview;
                michal = _closure2_slot0;
                michal = tangon.bind(golfie)(michal);
                if(michal) { _fun00006_ip = 227; continue _fun00005 }
 123:
                tangon = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 8;
                michal = golfie[michal];
                verify = undefined;
                golfie = tangon.bind(verify)(michal);
                tangon = golfie.isGuildOnboardingSettingsAvailable;
                michal = _closure2_slot0;
                michal = tangon.bind(golfie)(michal);
                if(michal) { _fun00006_ip = 194; continue _fun00005 }
 163:
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                tangon = 9;
                tangon = option[tangon];
                tangon = golfie.bind(verify)(tangon);
                tangon = tangon.bind(verify)(report);
                tangon = !tangon;
                michal = !tangon;
 194:
                if(!michal) { _fun00006_ip = 225; continue _fun00005 }
 197:
                tangon = _closure2_slot1;
                if(tangon) { _fun00006_ip = 222; continue _fun00005 }
 204:
                option = _closure1_slot12;
                golfie = _closure2_slot0;
                oscard = _closure1_slot4;
                tangon = option.bind(verify)(golfie, oscard);
 222:
                michal = tangon;
 225:
                _fun00006_ip = 238; continue _fun00005;
 227:
                tangon = _closure1_slot11;
                zuuluu = undefined;
                michal = tangon.bind(zuuluu)(report);
 238:
                entity = michal;
 241:
                return entity;
 243:
                entity = false;
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useCanSeeOnboardingHome'] = tangon;
    michal = function(argFoo) { // Original name: canSeeOnboardingHome
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot5;
            michal = zuuluu.getGuild;
            zuuluu = michal.bind(zuuluu)(report);
            tangon = _closure1_slot3;
            michal = tangon.isFullServerPreview;
            michal = michal.bind(tangon)(report);
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00008_ip = 272; continue _fun00007 }
 44:
            tangon = _closure1_slot9;
            if(!(report !== tangon)) { _fun00008_ip = 268; continue _fun00007 }
 55:
            tangon = _closure1_slot7;
            if(!(report !== tangon)) { _fun00008_ip = 268; continue _fun00007 }
 66:
            if(michal) { _fun00008_ip = 255; continue _fun00007 }
 72:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 8;
            tangon = tangon[michal];
            michal = undefined;
            tangon = oscard.bind(michal)(tangon);
            michal = tangon.isGuildOnboardingSettingsAvailable;
            tangon = michal.bind(tangon)(report);
            if(!tangon) { _fun00008_ip = 134; continue _fun00007 }
 108:
            oscard = zuuluu.features;
            report = oscard.has;
            michal = _closure1_slot8;
            michal = michal.GUILD_ONBOARDING;
            tangon = report.bind(oscard)(michal);
 134:
            if(!tangon) { _fun00008_ip = 163; continue _fun00007 }
 137:
            oscard = zuuluu.features;
            report = oscard.has;
            michal = _closure1_slot8;
            michal = michal.GUILD_SERVER_GUIDE;
            tangon = report.bind(oscard)(michal);
 163:
            oscard = zuuluu.features;
            report = oscard.has;
            michal = _closure1_slot8;
            michal = michal.GUILD_ONBOARDING;
            michal = report.bind(oscard)(michal);
            if(!michal) { _fun00008_ip = 218; continue _fun00007 }
 192:
            golfie = zuuluu.features;
            oscard = golfie.has;
            report = _closure1_slot8;
            report = report.GUILD_SERVER_GUIDE;
            michal = oscard.bind(golfie)(report);
 218:
            if(michal) { _fun00008_ip = 224; continue _fun00007 }
 221:
            michal = tangon;
 224:
            if(!michal) { _fun00008_ip = 253; continue _fun00007 }
 227:
            oscard = zuuluu.features;
            report = oscard.has;
            tangon = _closure1_slot8;
            tangon = tangon.COMMUNITY;
            michal = report.bind(oscard)(tangon);
 253:
            return michal;
 255:
            michal = _closure1_slot11;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
            return entity;
 268:
            entity = false;
            return entity;
 272:
            entity = false;
            return entity;
        }
    };
    zuuluu['canSeeOnboardingHome'] = michal;
    return entity;
})();