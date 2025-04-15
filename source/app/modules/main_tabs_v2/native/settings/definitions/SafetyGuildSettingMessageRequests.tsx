// app/modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingMessageRequests.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: showMessageRequestRestrictionModal
        entity = argFoo;
        var _closure2_slot0 = entity;
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
        verify = verify.yAfu1t;
        verify = offset.bind(romeon)(verify);
        michal['title'] = verify;
        verify = option[oscard];
        verify = yankee.bind(entity)(verify);
        romeon = verify.intl;
        offset = romeon.string;
        verify = option[oscard];
        verify = yankee.bind(entity)(verify);
        verify = verify.t;
        verify = verify.Ry2z7+;
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
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 5;
                michal = oscard[zuuluu];
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                option = michal.MessageRequestRestrictedDefault;
                golfie = option.updateSetting;
                michal = _closure2_slot0;
                golfie = golfie.bind(option)(michal);
                zuuluu = oscard[zuuluu];
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = zuuluu.MessageRequestRestrictedGuildIds;
                zuuluu = tangon.updateSetting;
                if(michal) { _fun00002_ip = 79; continue _fun00001 }
 73:
                michal = new Array(0);
                _fun00002_ip = 123; continue _fun00001;
 79:
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                oscard = 9;
                oscard = option[oscard];
                golfie = golfie.bind(entity)(oscard);
                oscard = golfie.keys;
                option = _closure1_slot5;
                report = option.getGuilds;
                report = report.bind(option)();
                michal = oscard.bind(golfie)(report);
 123:
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
            tangon = michal.MessageRequestRestrictedDefault;
            zuuluu = tangon.updateSetting;
            michal = _closure2_slot0;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        michal['onCancel'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot8 = michal;
    option = function() { // Original name: useIsDisabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 14;
            entity = golfie[entity];
            report = undefined;
            michal = oscard.bind(report)(entity);
            entity = michal.useDefaultGuildsRestricted;
            michal = entity.bind(michal)();
            entity = _closure1_slot4;
            entity = entity.bind(report)();
            tangon = entity.selectedGuildId;
            entity = 5;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            report = entity.RestrictedGuildIds;
            entity = report.useSetting;
            report = entity.bind(report)();
            entity = report.includes;
            entity = entity.bind(report)(tangon);
            zuuluu = _closure1_slot6;
            if(!(tangon === zuuluu)) { _fun00004_ip = 98; continue _fun00003 }
 95:
            entity = michal;
 98:
            return entity;
        }
    };
    var _closure1_slot9 = option;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    offset = tangon.getSelectedGuildId;
    var _closure1_slot3 = offset;
    tangon = tangon.useUserSafetySettingsSelectedGuildStore;
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    verify = tangon.MobileSetting;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    offset = tangon.GUILD_SELECT_ALL_SERVERS_OPTION_ID;
    var _closure1_slot6 = offset;
    offset = tangon.RendererType;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.HelpdeskArticles;
    var _closure1_slot7 = tangon;
    tangon = {};
    offset = offset.TOGGLE;
    tangon['type'] = offset;
    offset = function() { // Original name: title
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
        entity = entity.3o2ojo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['title'] = offset;
    offset = function() { // Original name: useDescription
        michal = _closure1_slot0;
        verify = _closure1_slot2;
        entity = 7;
        zuuluu = verify[entity];
        option = undefined;
        zuuluu = michal.bind(option)(zuuluu);
        tangon = zuuluu.intl;
        zuuluu = tangon.formatToPlainString;
        entity = verify[entity];
        entity = michal.bind(option)(entity);
        entity = entity.t;
        michal = entity.wkm9a2;
        entity = {};
        golfie = _closure1_slot1;
        oscard = 15;
        oscard = verify[oscard];
        golfie = golfie.bind(option)(oscard);
        oscard = golfie.getArticleURL;
        report = _closure1_slot7;
        report = report.MESSAGE_REQUESTS;
        report = oscard.bind(golfie)(report);
        entity['helpdeskArticle'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    tangon['useDescription'] = offset;
    verify = verify.CONTENT_AND_SOCIAL_DISCORD;
    tangon['parent'] = verify;
    verify = function() { // Original name: useValue
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = _closure1_slot4;
            golfie = undefined;
            entity = entity.bind(golfie)();
            report = entity.selectedGuildId;
            entity = _closure1_slot9;
            entity = entity.bind(golfie)();
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            michal = 5;
            zuuluu = option[michal];
            zuuluu = oscard.bind(golfie)(zuuluu);
            verify = zuuluu.MessageRequestRestrictedDefault;
            zuuluu = verify.useSetting;
            zuuluu = zuuluu.bind(verify)();
            zuuluu = !zuuluu;
            michal = option[michal];
            michal = oscard.bind(golfie)(michal);
            oscard = michal.MessageRequestRestrictedGuildIds;
            michal = oscard.useSetting;
            oscard = michal.bind(oscard)();
            michal = oscard.includes;
            michal = michal.bind(oscard)(report);
            michal = !michal;
            entity = !entity;
            if(!entity) { _fun00006_ip = 124; continue _fun00005 }
 110:
            tangon = _closure1_slot6;
            if(!(report === tangon)) { _fun00006_ip = 121; continue _fun00005 }
 118:
            michal = zuuluu;
 121:
            entity = michal;
 124:
            return entity;
        }
    };
    tangon['useValue'] = verify;
    tangon['useIsDisabled'] = option;
    report = function(argFoo) { // Original name: onAllowMessageRequestsFromServerMembersValueChange
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 10;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.shouldAgeVerifyForDMDefaultOff;
            tangon = tangon.bind(report)();
            if(tangon) { _fun00008_ip = 186; continue _fun00007 }
 44:
            tangon = _closure1_slot3;
            report = tangon.bind(entity)();
            tangon = _closure1_slot6;
            if(!(report !== tangon)) { _fun00008_ip = 172; continue _fun00007 }
 60:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 13;
            tangon = golfie[tangon];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.getSanitizedMessageRequestRestrictedGuilds;
            option = tangon.bind(oscard)();
            if(zuuluu) { _fun00008_ip = 105; continue _fun00007 }
 93:
            tangon = option.add;
            tangon = tangon.bind(option)(report);
            _fun00008_ip = 115; continue _fun00007;
 105:
            tangon = option.delete;
            tangon = tangon.bind(option)(report);
 115:
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 5;
            tangon = oscard[tangon];
            tangon = report.bind(entity)(tangon);
            oscard = tangon.MessageRequestRestrictedGuildIds;
            report = oscard.updateSetting;
            tangon = global;
            golfie = tangon.Array;
            tangon = golfie.from;
            tangon = tangon.bind(golfie)(option);
            tangon = report.bind(oscard)(tangon);
            _fun00008_ip = 245; continue _fun00007;
 172:
            tangon = _closure1_slot8;
            zuuluu = !zuuluu;
            zuuluu = tangon.bind(entity)(zuuluu);
            _fun00008_ip = 245; continue _fun00007;
 186:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 11;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.showAgeVerificationGetStartedModal;
            report = _closure1_slot0;
            michal = 12;
            michal = oscard[michal];
            michal = report.bind(entity)(michal);
            michal = michal.AgeVerificationModalEntryPoint;
            michal = michal.MESSAGE_REQUESTS_SETTINGS;
            michal = zuuluu.bind(tangon)(michal);
 245:
            return entity;
        }
    };
    tangon['onValueChange'] = report;
    report = 16;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/settings/definitions/SafetyGuildSettingMessageRequests.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['showMessageRequestRestrictionModal'] = michal;
    return entity;
})();