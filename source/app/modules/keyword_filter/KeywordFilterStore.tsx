// app/modules/keyword_filter/KeywordFilterStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: initializeKeywordTrie
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 8;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getKeywordFilterSetting;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00004_ip = 44; continue _fun00003 }
 38:
            tangon = new Array(0);
            _fun00004_ip = 130; continue _fun00003;
 44:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            report = 9;
            zuuluu = option[report];
            zuuluu = golfie.bind(entity)(zuuluu);
            yankee = zuuluu.PROFANITY_KEYWORD_LIST;
            zuuluu = new Array(0);
            offset = 0;
            romeon = zuuluu;
            offset = arraySpread(romeon, yankee, offset);
            oscard = option[report];
            oscard = golfie.bind(entity)(oscard);
            yankee = oscard.SLURS_KEYWORD_LIST;
            romeon = zuuluu;
            offset = arraySpread(romeon, yankee, offset);
            report = option[report];
            report = golfie.bind(entity)(report);
            yankee = report.SEXUAL_CONTENT_KEYWORD_LIST;
            romeon = zuuluu;
            report = arraySpread(romeon, yankee, offset);
            tangon = zuuluu;
 130:
            report = _closure1_slot7;
            zuuluu = report.getCurrentUser;
            report = zuuluu.bind(report)();
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00004_ip = 219; continue _fun00003 }
 149:
            zuuluu = report.isStaff;
            zuuluu = zuuluu.bind(report)();
            if(!zuuluu) { _fun00004_ip = 219; continue _fun00003 }
 162:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 9;
            zuuluu = oscard[zuuluu];
            zuuluu = report.bind(entity)(zuuluu);
            yankee = zuuluu.STAFF_ONLY_KEYWORDS;
            report = tangon.push;
            zuuluu = new Array(0);
            offset = 0;
            romeon = zuuluu;
            oscard = arraySpread(romeon, yankee, offset);
            romeon = report;
            yankee = zuuluu;
            offset = tangon;
            zuuluu = apply(romeon, yankee, offset);
 219:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 10;
            zuuluu = oscard[zuuluu];
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.Trie;
            report = zuuluu.prototype;
            report = Object.create(report, {constructor: {value: zuuluu}});
            foxtra = report;
            zuuluu = new foxtra[zuuluu](romeon);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            _closure1_slot9 = zuuluu;
            michal = zuuluu.addWords;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: handleConnectionOpen
        michal = _closure1_slot11;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: handleOverlayInitialize
        michal = _closure1_slot11;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: handleSettingsUpdate
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.local;
            entity = entity.settings;
            if(!michal) { _fun00006_ip = 76; continue _fun00005 }
 18:
            zuuluu = entity.type;
            michal = _closure1_slot8;
            michal = michal.PRELOADED_USER_SETTINGS;
            if(!(zuuluu === michal)) { _fun00006_ip = 76; continue _fun00005 }
 40:
            zuuluu = _closure1_slot9;
            michal = null;
            if(!(michal != zuuluu)) { _fun00006_ip = 64; continue _fun00005 }
 50:
            zuuluu = _closure1_slot9;
            michal = zuuluu.clear;
            michal = michal.bind(zuuluu)();
 64:
            michal = _closure1_slot11;
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
 76:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = verify.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 3;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 4;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 5;
    golfie = oscard[golfie];
    golfie = verify.bind(entity)(golfie);
    option = 6;
    option = oscard[option];
    option = verify.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 7;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.UserSettingsTypes;
    var _closure1_slot8 = option;
    option = null;
    var _closure1_slot9 = option;
    michal = function(argFoo) {
        tangon = function() { // Original name: KeywordFilterStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = this;
                entity = _closure1_slot2;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                entity = entity.bind(tangon)(report, zuuluu);
                entity = {};
                golfie = _closure1_slot12;
                entity['CONNECTION_OPEN'] = golfie;
                entity['CONNECTION_OPEN_SUPPLEMENTAL'] = golfie;
                golfie = function() { // Original name: CACHE_LOADED
                    michal = _closure3_slot0;
                    entity = michal.loadCache;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity['CACHE_LOADED'] = golfie;
                golfie = _closure1_slot13;
                entity['OVERLAY_INITIALIZE'] = golfie;
                golfie = _closure1_slot14;
                entity['USER_SETTINGS_PROTO_UPDATE'] = golfie;
                offset = new Array(1);
                offset[0] = entity;
                entity = _closure1_slot5;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot4;
                entity = _closure1_slot10;
                entity = entity.bind(tangon)();
                if(entity) { _fun00008_ip = 116; continue _fun00007 }
 103:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00008_ip = 150; continue _fun00007;
 116:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 150:
                entity = zuuluu.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'loadCache';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.readSnapshot;
                entity = _closure2_slot0;
                entity = entity.LATEST_SNAPSHOT_VERSION;
                entity = michal.bind(zuuluu)(entity);
                michal = null;
                if(!(michal != entity)) { _fun00010_ip = 105; continue _fun00009 }
 33:
                zuuluu = entity.keywordTrie;
                zuuluu = michal != zuuluu;
                michal = null;
                if(!zuuluu) { _fun00010_ip = 98; continue _fun00009 }
 48:
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                zuuluu = 10;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                tangon = zuuluu.Trie;
                zuuluu = tangon.fromSnapshot;
                entity = entity.keywordTrie;
                michal = zuuluu.bind(tangon)(entity);
 98:
                _closure1_slot9 = michal;
 105:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'takeSnapshot';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            michal = _closure2_slot0;
            michal = michal.LATEST_SNAPSHOT_VERSION;
            entity['version'] = michal;
            michal = {};
            zuuluu = _closure1_slot9;
            michal['keywordTrie'] = zuuluu;
            entity['data'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getKeywordTrie';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'initializeForKeywordTests';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = arguments[0];
                entity = undefined;
                if(!(tangon === entity)) { _fun00012_ip = 13; continue _fun00011 }
 9:
                tangon = new Array(0);
 13:
                if(!(tangon === entity)) { _fun00012_ip = 21; continue _fun00011 }
 17:
                tangon = new Array(0);
 21:
                report = _closure1_slot9;
                zuuluu = null;
                if(!(zuuluu == report)) { _fun00012_ip = 84; continue _fun00011 }
 34:
                report = _closure1_slot0;
                oscard = _closure1_slot1;
                zuuluu = 10;
                zuuluu = oscard[zuuluu];
                zuuluu = report.bind(entity)(zuuluu);
                zuuluu = zuuluu.Trie;
                report = zuuluu.prototype;
                report = Object.create(report, {constructor: {value: zuuluu}});
                option = report;
                zuuluu = new option[zuuluu](golfie);
                zuuluu = zuuluu instanceof Object ? zuuluu : report;
                _closure1_slot9 = zuuluu;
 84:
                zuuluu = _closure1_slot9;
                michal = zuuluu.addWords;
                michal = michal.bind(zuuluu)(tangon);
                return entity;
            }
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(golfie);
    golfie = 'KeywordFilterStore';
    michal['displayName'] = golfie;
    michal['LATEST_SNAPSHOT_VERSION'] = tangon;
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/keyword_filter/KeywordFilterStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();