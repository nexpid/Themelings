// app/modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingDirectMessages.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    option = michal.getSelectedGuildId;
    var _closure1_slot3 = option;
    michal = michal.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot4 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = 3;
    michal = oscard[michal];
    option = report.bind(entity)(michal);
    michal = option.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot6 = michal;
    michal = {};
    option = option.RendererType;
    option = option.TOGGLE;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 7;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.RAQUSE;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    option = function() { // Original name: useTitle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 10;
            entity = tangon[entity];
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.useAllowFriendsFromMutualGuildsOnly;
            entity = entity.bind(zuuluu)();
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 7;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            if(entity) { _fun00002_ip = 95; continue _fun00001 }
 82:
            entity = michal.RAQUSE;
            entity = zuuluu.bind(tangon)(entity);
            _fun00002_ip = 108; continue _fun00001;
 95:
            michal = michal.PMsfcH;
            entity = zuuluu.bind(tangon)(michal);
 108:
            return entity;
        }
    };
    michal['useTitle'] = option;
    option = function() { // Original name: useDescription
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot4;
            golfie = undefined;
            entity = entity.bind(golfie)();
            tangon = entity.selectedGuildId;
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 10;
            entity = report[entity];
            michal = michal.bind(golfie)(entity);
            entity = michal.useAllowFriendsFromMutualGuildsOnly;
            michal = entity.bind(michal)();
            entity = _closure1_slot6;
            if(!(tangon !== entity)) { _fun00004_ip = 134; continue _fun00003 }
 57:
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            entity = 7;
            report = option[entity];
            report = tangon.bind(golfie)(report);
            oscard = report.intl;
            report = oscard.string;
            entity = option[entity];
            entity = tangon.bind(golfie)(entity);
            tangon = entity.t;
            if(michal) { _fun00004_ip = 119; continue _fun00003 }
 104:
            entity = tangon.G7c3Xl;
            entity = report.bind(oscard)(entity);
            _fun00004_ip = 132; continue _fun00003;
 119:
            tangon = tangon.F9WY3d;
            entity = report.bind(oscard)(tangon);
 132:
            _fun00004_ip = 212; continue _fun00003;
 134:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 7;
            tangon = option[zuuluu];
            tangon = oscard.bind(golfie)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.t;
            if(michal) { _fun00004_ip = 196; continue _fun00003 }
 181:
            michal = zuuluu.wbYDfX;
            michal = tangon.bind(report)(michal);
            _fun00004_ip = 209; continue _fun00003;
 196:
            zuuluu = zuuluu.XXGmuL;
            michal = tangon.bind(report)(zuuluu);
 209:
            entity = michal;
 212:
            return entity;
        }
    };
    michal['useDescription'] = option;
    golfie = golfie.CONTENT_AND_SOCIAL_DISCORD;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useValue
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = _closure1_slot4;
            oscard = undefined;
            entity = entity.bind(oscard)();
            tangon = entity.selectedGuildId;
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 4;
            entity = golfie[entity];
            michal = report.bind(oscard)(entity);
            entity = michal.useDefaultGuildsRestricted;
            entity = entity.bind(michal)();
            michal = !entity;
            entity = 5;
            entity = golfie[entity];
            entity = report.bind(oscard)(entity);
            report = entity.RestrictedGuildIds;
            entity = report.useSetting;
            report = entity.bind(report)();
            entity = report.includes;
            entity = entity.bind(report)(tangon);
            entity = !entity;
            zuuluu = _closure1_slot6;
            if(!(tangon === zuuluu)) { _fun00006_ip = 104; continue _fun00005 }
 101:
            entity = michal;
 104:
            return entity;
        }
    };
    michal['useValue'] = golfie;
    tangon = function(argFoo) { // Original name: onAllowDirectMessagesFromServerMembersValueChange
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot3;
            entity = undefined;
            report = tangon.bind(entity)();
            tangon = _closure1_slot6;
            if(!(report !== tangon)) { _fun00008_ip = 136; continue _fun00007 }
 24:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 9;
            tangon = golfie[tangon];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.getSanitizedRestrictedGuilds;
            golfie = tangon.bind(oscard)();
            if(michal) { _fun00008_ip = 69; continue _fun00007 }
 57:
            tangon = golfie.add;
            tangon = tangon.bind(golfie)(report);
            _fun00008_ip = 79; continue _fun00007;
 69:
            tangon = golfie.delete;
            tangon = tangon.bind(golfie)(report);
 79:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            report = zuuluu.RestrictedGuildIds;
            tangon = report.updateSetting;
            zuuluu = global;
            oscard = zuuluu.Array;
            zuuluu = oscard.from;
            zuuluu = zuuluu.bind(oscard)(golfie);
            zuuluu = tangon.bind(report)(zuuluu);
            _fun00008_ip = 153; continue _fun00007;
 136:
            zuuluu = !michal;
            michal = function(argFoo) { // Original name: showGuildRestrictionModal
                entity = argFoo;
                var _closure3_slot0 = entity;
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                entity = 6;
                michal = option[entity];
                entity = undefined;
                tangon = golfie.bind(entity)(michal);
                zuuluu = tangon.show;
                michal = {};
                yankee = _closure1_slot0;
                oscard = 7;
                verify = option[oscard];
                verify = yankee.bind(entity)(verify);
                romeon = verify.intl;
                offset = romeon.string;
                verify = option[oscard];
                verify = yankee.bind(entity)(verify);
                verify = verify.t;
                verify = verify.Hq4ApK;
                verify = offset.bind(romeon)(verify);
                michal['title'] = verify;
                verify = option[oscard];
                verify = yankee.bind(entity)(verify);
                romeon = verify.intl;
                offset = romeon.string;
                verify = option[oscard];
                verify = yankee.bind(entity)(verify);
                verify = verify.t;
                verify = verify.qTCYur;
                verify = offset.bind(romeon)(verify);
                michal['body'] = verify;
                verify = option[oscard];
                verify = yankee.bind(entity)(verify);
                romeon = verify.intl;
                offset = romeon.string;
                verify = option[oscard];
                verify = yankee.bind(entity)(verify);
                verify = verify.t;
                verify = verify.p89ACg;
                verify = offset.bind(romeon)(verify);
                michal['confirmText'] = verify;
                verify = option[oscard];
                verify = yankee.bind(entity)(verify);
                offset = verify.intl;
                verify = offset.string;
                oscard = option[oscard];
                oscard = yankee.bind(entity)(oscard);
                oscard = oscard.t;
                oscard = oscard.gm1Ven;
                oscard = verify.bind(offset)(oscard);
                michal['cancelText'] = oscard;
                oscard = 8;
                oscard = option[oscard];
                oscard = golfie.bind(entity)(oscard);
                oscard = oscard.Colors;
                oscard = oscard.RED;
                michal['confirmColor'] = oscard;
                oscard = function() { // Original name: onConfirm
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        tangon = _closure1_slot0;
                        oscard = _closure1_slot2;
                        zuuluu = 5;
                        michal = oscard[zuuluu];
                        entity = undefined;
                        michal = tangon.bind(entity)(michal);
                        option = michal.DefaultGuildsRestrictedV2;
                        golfie = option.updateSetting;
                        michal = _closure3_slot0;
                        golfie = golfie.bind(option)(michal);
                        zuuluu = oscard[zuuluu];
                        zuuluu = tangon.bind(entity)(zuuluu);
                        tangon = zuuluu.RestrictedGuildIds;
                        zuuluu = tangon.updateSetting;
                        if(michal) { _fun00010_ip = 79; continue _fun00009 }
 73:
                        michal = new Array(0);
                        _fun00010_ip = 93; continue _fun00009;
 79:
                        oscard = _closure1_slot5;
                        report = oscard.getGuildIds;
                        michal = report.bind(oscard)();
 93:
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    }
                };
                michal['onConfirm'] = oscard;
                report = function() { // Original name: onCancel
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 5;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    tangon = michal.DefaultGuildsRestrictedV2;
                    zuuluu = tangon.updateSetting;
                    michal = _closure3_slot0;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal['onCancel'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = michal.bind(entity)(zuuluu);
 153:
            return entity;
        }
    };
    michal['onValueChange'] = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingDirectMessages.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();