// app/modules/client_themes/ClientThemesBackgroundStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot23 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    verify = function() { // Original name: reset
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = _closure1_slot19;
            if(!entity) { _fun00004_ip = 16; continue _fun00003 }
 10:
            entity = undefined;
            var _closure1_slot17 = entity;
 16:
            entity = false;
            _closure1_slot20 = entity;
            entity = undefined;
            return entity;
        }
    };
    entity = global;
    yankee = entity.Object;
    option = yankee.defineProperty;
    tangon = {};
    michal = true;
    tangon['value'] = michal;
    entity = '__esModule';
    entity = option.bind(yankee)(zuuluu, entity, tangon);
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.isGuildTextChannelType;
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.BACKGROUND_GRADIENT_PRESETS_MAP;
    var _closure1_slot15 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SystemThemeState;
    var _closure1_slot16 = tangon;
    var _closure1_slot19 = michal;
    michal = false;
    var _closure1_slot20 = michal;
    michal = function() { // Original name: handleUserStoreChange
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            report = tangon.bind(entity)(michal);
            tangon = report.canUseClientThemes;
            oscard = _closure1_slot14;
            michal = oscard.getCurrentUser;
            michal = michal.bind(oscard)();
            michal = tangon.bind(report)(michal);
            michal = !michal;
            tangon = _closure1_slot19;
            if(!(michal !== tangon)) { _fun00006_ip = 66; continue _fun00005 }
 60:
            _closure1_slot19 = michal;
            return entity;
 66:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot21 = michal;
    michal = function() { // Original name: handleSelectivelySyncedStoreChange
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = _closure1_slot8;
            zuuluu = tangon.shouldSync;
            entity = 'appearance';
            entity = zuuluu.bind(tangon)(entity);
            if(entity) { _fun00008_ip = 29; continue _fun00007 }
 25:
            entity = false;
            return entity;
 29:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 18;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = zuuluu.ClientThemeSettings;
            zuuluu = tangon.getSetting;
            zuuluu = zuuluu.bind(tangon)();
            report = zuuluu.backgroundGradientPresetId;
            tangon = null;
            if(!(tangon != report)) { _fun00008_ip = 105; continue _fun00007 }
 79:
            zuuluu = _closure1_slot15;
            zuuluu = zuuluu[report];
            report = _closure1_slot17;
            if(!(zuuluu !== report)) { _fun00008_ip = 101; continue _fun00007 }
 95:
            _closure1_slot17 = zuuluu;
            _fun00008_ip = 117; continue _fun00007;
 101:
            zuuluu = false;
            return zuuluu;
 105:
            zuuluu = _closure1_slot17;
            if(!(tangon != zuuluu)) { _fun00008_ip = 119; continue _fun00007 }
 113:
            _closure1_slot17 = entity;
 117:
            return entity;
 119:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot22 = michal;
    tangon = function() { // Original name: handleUserSettingsProtoStoreUpdate
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = _closure1_slot8;
            michal = tangon.shouldSync;
            entity = 'appearance';
            entity = michal.bind(tangon)(entity);
            if(entity) { _fun00010_ip = 29; continue _fun00009 }
 25:
            entity = false;
            return entity;
 29:
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 19;
            michal = michal[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(michal);
            michal = tangon.shouldIgnoreThemeChange;
            michal = michal.bind(tangon)();
            if(michal) { _fun00010_ip = 269; continue _fun00009 }
 67:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 18;
            michal = report[michal];
            michal = tangon.bind(entity)(michal);
            tangon = michal.ClientThemeSettings;
            michal = tangon.getSetting;
            michal = michal.bind(tangon)();
            report = michal.backgroundGradientPresetId;
            michal = _closure1_slot10;
            tangon = michal.useSystemTheme;
            michal = _closure1_slot16;
            michal = michal.ON;
            michal = tangon === michal;
            if(!michal) { _fun00010_ip = 142; continue _fun00009 }
 136:
            tangon = null;
            michal = tangon != report;
 142:
            if(!michal) { _fun00010_ip = 186; continue _fun00009 }
 145:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 20;
            michal = oscard[michal];
            oscard = tangon.bind(entity)(michal);
            tangon = oscard.setUseSystemTheme;
            michal = _closure1_slot16;
            michal = michal.OFF;
            michal = tangon.bind(oscard)(michal);
 186:
            tangon = null;
            if(!(tangon == report)) { _fun00010_ip = 206; continue _fun00009 }
 192:
            michal = _closure1_slot17;
            if(!(tangon != michal)) { _fun00010_ip = 267; continue _fun00009 }
 200:
            _closure1_slot17 = entity;
            _fun00010_ip = 267; continue _fun00009;
 206:
            michal = _closure1_slot15;
            michal = michal[report];
            report = _closure1_slot17;
            golfie = tangon == report;
            oscard = undefined;
            if(golfie) { _fun00010_ip = 232; continue _fun00009 }
 227:
            oscard = report.id;
 232:
            golfie = tangon == michal;
            report = undefined;
            if(golfie) { _fun00010_ip = 246; continue _fun00009 }
 241:
            report = michal.id;
 246:
            report = oscard === report;
            tangon = tangon == michal;
            if(tangon) { _fun00010_ip = 260; continue _fun00009 }
 257:
            tangon = report;
 260:
            if(tangon) { _fun00010_ip = 267; continue _fun00009 }
 263:
            _closure1_slot17 = michal;
 267:
            return entity;
 269:
            entity = false;
            return entity;
        }
    };
    michal = 22;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: ClientThemesBackgroundStore
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = this;
                romeon = 0;
                entity = copyRestArgs(romeon);
                golfie = _closure1_slot3;
                michal = _closure2_slot0;
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(tangon, michal);
                verify = new Array(0);
                romeon = verify;
                yankee = entity;
                offset = 0;
                entity = arraySpread(romeon, yankee, offset);
                entity = _closure1_slot6;
                option = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot23;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00012_ip = 84; continue _fun00011 }
 71:
                entity = option.apply;
                entity = entity.bind(option)(tangon, verify);
                _fun00012_ip = 118; continue _fun00011;
 84:
                oscard = global;
                golfie = oscard.Reflect;
                oscard = golfie.construct;
                report = _closure1_slot6;
                report = report.bind(zuuluu)(tangon);
                report = report.constructor;
                entity = oscard.bind(golfie)(option, verify, report);
 118:
                entity = michal.bind(zuuluu)(tangon, entity);
                michal = new Array(1);
                zuuluu = function(argFoo) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zuuluu = argFoo;
                        entity = {};
                        tangon = null;
                        oscard = tangon == zuuluu;
                        michal = undefined;
                        if(oscard) { _fun00014_ip = 36; continue _fun00013 }
 16:
                        zuuluu = zuuluu.gradientPreset;
                        tangon = tangon == zuuluu;
                        michal = undefined;
                        if(tangon) { _fun00014_ip = 36; continue _fun00013 }
 31:
                        michal = zuuluu.id;
 36:
                        entity['gradientPresetId'] = michal;
                        return entity;
                    }
                };
                michal[0] = zuuluu;
                entity['migrations'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                tangon = this;
                report = null;
                if(!(report != entity)) { _fun00016_ip = 60; continue _fun00015 }
 12:
                oscard = report == entity;
                zuuluu = undefined;
                if(oscard) { _fun00016_ip = 27; continue _fun00015 }
 21:
                zuuluu = entity.gradientPresetId;
 27:
                zuuluu = report != zuuluu;
                michal = undefined;
                if(!zuuluu) { _fun00016_ip = 53; continue _fun00015 }
 36:
                zuuluu = _closure1_slot15;
                entity = entity.gradientPresetId;
                michal = zuuluu[entity];
 53:
                _closure1_slot17 = michal;
 60:
                option = tangon.waitFor;
                michal = _closure1_slot14;
                romeon = _closure1_slot9;
                yankee = _closure1_slot13;
                report = _closure1_slot8;
                verify = _closure1_slot11;
                backup = tangon;
                foxtra = michal;
                offset = report;
                zuuluu = backup[option](foxtra, romeon, yankee, offset, verify, option);
                oscard = tangon.syncWith;
                zuuluu = new Array(1);
                zuuluu[0] = michal;
                michal = _closure1_slot21;
                michal = oscard.bind(tangon)(zuuluu, michal);
                zuuluu = tangon.syncWith;
                michal = new Array(1);
                michal[0] = report;
                entity = _closure1_slot22;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = _closure1_slot19;
                if(entity) { _fun00018_ip = 39; continue _fun00017 }
 10:
                entity = {};
                zuuluu = _closure1_slot17;
                michal = null;
                tangon = michal == zuuluu;
                michal = undefined;
                if(tangon) { _fun00018_ip = 32; continue _fun00017 }
 27:
                michal = zuuluu.id;
 32:
                entity['gradientPresetId'] = michal;
                _fun00018_ip = 41; continue _fun00017;
 39:
                entity = {};
 41:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'gradientPreset';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot17;
            return entity;
        };
        report['get'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getLinearGradient';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = this;
                zuuluu = michal.gradientPreset;
                entity = null;
                zuuluu = entity == zuuluu;
                if(zuuluu) { _fun00020_ip = 60; continue _fun00019 }
 18:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 21;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                tangon = report.bind(zuuluu)(tangon);
                zuuluu = tangon.getLinearGradientForBackgroundGradient;
                michal = michal.gradientPreset;
                entity = zuuluu.bind(tangon)(michal);
 60:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'isPreview';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot19;
            return entity;
        };
        report['get'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'isCoachmark';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot20;
            return entity;
        };
        report['get'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'mobilePendingThemeIndex';
        report['key'] = golfie;
        oscard = function() { // Original name: get
            entity = _closure1_slot18;
            return entity;
        };
        report['get'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'ClientThemesBackgroundStore';
    option['displayName'] = michal;
    option['persistKey'] = michal;
    michal = 23;
    michal = oscard[michal];
    backup = golfie.bind(entity)(michal);
    michal = {};
    yankee = function(argFoo) { // Original name: UPDATE_BACKGROUND_GRADIENT_PRESET
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tangon = entity.presetId;
            entity = null;
            michal = entity != tangon;
            entity = undefined;
            zuuluu = undefined;
            if(!michal) { _fun00022_ip = 33; continue _fun00021 }
 22:
            michal = _closure1_slot15;
            zuuluu = michal[tangon];
 33:
            _closure1_slot17 = zuuluu;
            return entity;
        }
    };
    michal['UPDATE_BACKGROUND_GRADIENT_PRESET'] = yankee;
    yankee = function(argFoo) { // Original name: UPDATE_MOBILE_PENDING_THEME_INDEX
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            michal = entity.mobileThemesIndex;
            entity = null;
            tangon = entity != michal;
            entity = undefined;
            zuuluu = undefined;
            if(!tangon) { _fun00024_ip = 25; continue _fun00023 }
 22:
            zuuluu = michal;
 25:
            var _closure1_slot18 = zuuluu;
            return entity;
        }
    };
    michal['UPDATE_MOBILE_PENDING_THEME_INDEX'] = yankee;
    yankee = function() { // Original name: RESET_PREVIEW_CLIENT_THEME
        entity = undefined;
        _closure1_slot17 = entity;
        return entity;
    };
    michal['RESET_PREVIEW_CLIENT_THEME'] = yankee;
    michal['CLIENT_THEMES_EDITOR_CLOSE'] = verify;
    offset = function(argFoo) { // Original name: CHANNEL_SELECT
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            oscard = entity.channelId;
            zuuluu = entity.guildId;
            tangon = _closure1_slot14;
            entity = tangon.getCurrentUser;
            golfie = entity.bind(tangon)();
            entity = null;
            if(!(entity != oscard)) { _fun00026_ip = 183; continue _fun00025 }
 38:
            if(!(entity != zuuluu)) { _fun00026_ip = 183; continue _fun00025 }
 45:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = 14;
            zuuluu = offset[zuuluu];
            report = undefined;
            option = verify.bind(report)(zuuluu);
            tangon = option.UNSAFE_isDismissibleContentDismissed;
            zuuluu = 15;
            zuuluu = offset[zuuluu];
            zuuluu = verify.bind(report)(zuuluu);
            zuuluu = zuuluu.DismissibleContent;
            zuuluu = zuuluu.CLIENT_THEMES_COACHMARK;
            zuuluu = tangon.bind(option)(zuuluu);
            if(zuuluu) { _fun00026_ip = 183; continue _fun00025 }
 105:
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 16;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.ageEligibleForPremiumUpsell;
            zuuluu = zuuluu.bind(tangon)(golfie);
            if(!zuuluu) { _fun00026_ip = 183; continue _fun00025 }
 139:
            tangon = _closure1_slot13;
            zuuluu = tangon.getChannel;
            zuuluu = zuuluu.bind(tangon)(oscard);
            entity = entity != zuuluu;
            if(!entity) { _fun00026_ip = 174; continue _fun00025 }
 160:
            tangon = _closure1_slot12;
            zuuluu = zuuluu.type;
            entity = tangon.bind(report)(zuuluu);
 174:
            if(!entity) { _fun00026_ip = 183; continue _fun00025 }
 177:
            entity = true;
            _closure1_slot20 = entity;
 183:
            entity = undefined;
            return entity;
        }
    };
    michal['CHANNEL_SELECT'] = offset;
    michal['LOGOUT'] = verify;
    michal['CACHE_LOADED'] = tangon;
    michal['OVERLAY_INITIALIZE'] = tangon;
    michal['SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE'] = tangon;
    michal['UNSYNCED_USER_SETTINGS_UPDATE'] = tangon;
    michal['USER_SETTINGS_PROTO_UPDATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[option](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 24;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/client_themes/ClientThemesBackgroundStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();