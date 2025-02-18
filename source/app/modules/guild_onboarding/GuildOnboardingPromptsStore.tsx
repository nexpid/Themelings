// app/modules/guild_onboarding/GuildOnboardingPromptsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot21;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot21 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: convertPromptsToTracked
        zuuluu = argFoo;
        michal = argBar;
        var _closure2_slot0 = michal;
        michal = argBaz;
        var _closure2_slot1 = michal;
        michal = zuuluu.map;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                tangon = _closure2_slot0;
                yankee = _closure2_slot1;
                golfie = new Array(0);
                entity = michal.options;
                entity = entity.length;
                offset = 0;
                entity = offset < entity;
                report = false;
                verify = 'isUnseen';
                zuuluu = null;
                oscard = false;
                if(!entity) { _fun00006_ip = 121; continue _fun00005 }
 47:
                entity = michal.options;
                backup = entity[offset];
                entity = backup.id;
                entity = yankee[entity];
                foxtra = zuuluu == entity;
                if(!foxtra) { _fun00006_ip = 74; continue _fun00005 }
 72:
                report = true;
 74:
                romeon = golfie.push;
                entity = {};
                sizing = entity;
                kiloes = backup;
                backup = copyDataProperties(sizing, kiloes);
                entity[verify] = foxtra;
                entity = romeon.bind(golfie)(entity);
                offset = offset + 1;
                entity = michal.options;
                entity = entity.length;
                oscard = report;
                if(offset < entity) { _fun00006_ip = 47; continue _fun00005 }
 121:
                entity = {};
                sizing = entity;
                kiloes = michal;
                report = copyDataProperties(sizing, kiloes);
                report = 'options';
                entity[report] = golfie;
                report = 'hasNewAnswers';
                entity[report] = oscard;
                michal = michal.id;
                michal = tangon[michal];
                zuuluu = zuuluu == michal;
                michal = 'isNew';
                entity[michal] = zuuluu;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot22 = entity;
    verify = function(argFoo) { // Original name: handleUpdate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            report = entity.updates;
            option = report.onboardingPromptsSeen;
            entity = null;
            if(!(entity == option)) { _fun00008_ip = 55; continue _fun00007 }
 26:
            michal = _closure1_slot13;
            zuuluu = michal[tangon];
            oscard = entity == zuuluu;
            michal = undefined;
            if(oscard) { _fun00008_ip = 52; continue _fun00007 }
 46:
            michal = zuuluu.onboardingPromptsSeen;
 52:
            option = michal;
 55:
            if(!(entity == option)) { _fun00008_ip = 61; continue _fun00007 }
 59:
            option = {};
 61:
            golfie = report.onboardingResponsesSeen;
            if(!(entity == golfie)) { _fun00008_ip = 100; continue _fun00007 }
 71:
            michal = _closure1_slot13;
            zuuluu = michal[tangon];
            oscard = entity == zuuluu;
            michal = undefined;
            if(oscard) { _fun00008_ip = 97; continue _fun00007 }
 91:
            michal = zuuluu.onboardingResponsesSeen;
 97:
            golfie = michal;
 100:
            if(!(entity == golfie)) { _fun00008_ip = 106; continue _fun00007 }
 104:
            golfie = {};
 106:
            oscard = _closure1_slot22;
            zuuluu = report.prompts;
            if(!(entity == zuuluu)) { _fun00008_ip = 149; continue _fun00007 }
 123:
            verify = _closure1_slot13;
            offset = verify[tangon];
            yankee = entity == offset;
            verify = undefined;
            if(yankee) { _fun00008_ip = 146; continue _fun00007 }
 140:
            verify = offset.prompts;
 146:
            zuuluu = verify;
 149:
            if(!(entity == zuuluu)) { _fun00008_ip = 157; continue _fun00007 }
 153:
            zuuluu = new Array(0);
 157:
            entity = undefined;
            oscard = oscard.bind(entity)(zuuluu, option, golfie);
            zuuluu = _closure1_slot13;
            michal = {};
            foxtra = zuuluu[tangon];
            backup = michal;
            golfie = copyDataProperties(backup, foxtra);
            backup = michal;
            foxtra = report;
            report = copyDataProperties(backup, foxtra);
            report = 'prompts';
            michal[report] = oscard;
            zuuluu[tangon] = michal;
            return entity;
        }
    };
    entity = function(argFoo, argBar) { // Original name: mergePendingResponses
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            option = argBar;
            var _closure2_slot0 = zuuluu;
            var _closure2_slot1 = option;
            tangon = _closure1_slot14;
            report = tangon[zuuluu];
            tangon = null;
            if(!(tangon != report)) { _fun00010_ip = 171; continue _fun00009 }
 36:
            golfie = {};
            var _closure2_slot2 = golfie;
            tangon = global;
            verify = tangon.Object;
            oscard = verify.keys;
            report = _closure1_slot14;
            report = report[zuuluu];
            verify = oscard.bind(verify)(report);
            oscard = verify.forEach;
            report = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure2_slot1;
                    michal = tangon.includes;
                    michal = michal.bind(tangon)(zuuluu);
                    if(michal) { _fun00012_ip = 57; continue _fun00011 }
 23:
                    tangon = _closure1_slot14;
                    michal = _closure2_slot0;
                    michal = tangon[michal];
                    michal = michal[zuuluu];
                    if(!michal) { _fun00012_ip = 57; continue _fun00011 }
 45:
                    tangon = _closure2_slot2;
                    michal = true;
                    tangon[zuuluu] = michal;
                    _fun00012_ip = 112; continue _fun00011;
 57:
                    tangon = _closure2_slot1;
                    michal = tangon.includes;
                    michal = michal.bind(tangon)(zuuluu);
                    if(!michal) { _fun00012_ip = 99; continue _fun00011 }
 74:
                    report = _closure1_slot14;
                    tangon = _closure2_slot0;
                    tangon = report[tangon];
                    report = tangon[zuuluu];
                    tangon = false;
                    michal = tangon === report;
 99:
                    if(!michal) { _fun00012_ip = 112; continue _fun00011 }
 102:
                    michal = _closure2_slot2;
                    entity = false;
                    michal[zuuluu] = entity;
 112:
                    entity = undefined;
                    return entity;
                }
            };
            report = oscard.bind(verify)(report);
            report = _closure1_slot14;
            report[zuuluu] = golfie;
            oscard = option.filter;
            report = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = argFoo;
                    entity = _closure2_slot2;
                    tangon = entity[zuuluu];
                    entity = null;
                    entity = entity == tangon;
                    if(entity) { _fun00014_ip = 37; continue _fun00013 }
 23:
                    michal = _closure2_slot2;
                    zuuluu = michal[zuuluu];
                    michal = true;
                    entity = michal === zuuluu;
 37:
                    return entity;
                }
            };
            report = oscard.bind(option)(report);
            var _closure2_slot3 = report;
            oscard = tangon.Object;
            tangon = oscard.keys;
            oscard = tangon.bind(oscard)(golfie);
            tangon = oscard.forEach;
            michal = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure2_slot2;
                    tangon = michal[zuuluu];
                    michal = true;
                    michal = michal !== tangon;
                    if(michal) { _fun00016_ip = 37; continue _fun00015 }
 23:
                    report = _closure2_slot1;
                    tangon = report.includes;
                    michal = tangon.bind(report)(zuuluu);
 37:
                    if(michal) { _fun00016_ip = 54; continue _fun00015 }
 40:
                    michal = _closure2_slot3;
                    entity = michal.push;
                    entity = entity.bind(michal)(zuuluu);
 54:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(oscard)(michal);
            michal = _closure1_slot13;
            entity = {};
            offset = michal[zuuluu];
            yankee = entity;
            tangon = copyDataProperties(yankee, offset);
            tangon = 'responses';
            entity[tangon] = report;
            michal[zuuluu] = entity;
 171:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 7;
    option = oscard[michal];
    option = golfie.bind(entity)(option);
    var _closure1_slot10 = option;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.GuildOnboardingStatus;
    var _closure1_slot11 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.GuildOnboardingMode;
    var _closure1_slot12 = michal;
    michal = {};
    var _closure1_slot13 = michal;
    michal = {};
    var _closure1_slot14 = michal;
    michal = {};
    var _closure1_slot15 = michal;
    michal = false;
    var _closure1_slot16 = michal;
    michal = new Array(0);
    var _closure1_slot17 = michal;
    michal = new Array(0);
    var _closure1_slot18 = michal;
    michal = new Array(0);
    var _closure1_slot19 = michal;
    michal = 13;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: GuildOnboardingPromptsStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot20;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
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
        entity = function() { // Original name: value
            report = this;
            tangon = report.waitFor;
            zuuluu = _closure1_slot9;
            michal = _closure1_slot10;
            entity = _closure1_slot8;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(16);
        entity[0] = report;
        report = {};
        golfie = 'getOnboardingPromptsForOnboarding';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = _closure1_slot13;
                entity = argFoo;
                tangon = zuuluu[entity];
                zuuluu = null;
                report = zuuluu == tangon;
                entity = undefined;
                if(report) { _fun00018_ip = 31; continue _fun00017 }
 25:
                entity = tangon.onboardingPrompts;
 31:
                if(!(zuuluu == entity)) { _fun00018_ip = 39; continue _fun00017 }
 35:
                entity = _closure1_slot17;
 39:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getOnboardingPrompts';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = _closure1_slot13;
                entity = argFoo;
                tangon = zuuluu[entity];
                zuuluu = null;
                report = zuuluu == tangon;
                entity = undefined;
                if(report) { _fun00020_ip = 31; continue _fun00019 }
 25:
                entity = tangon.prompts;
 31:
                if(!(zuuluu == entity)) { _fun00020_ip = 39; continue _fun00019 }
 35:
                entity = _closure1_slot17;
 39:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getOnboardingResponses';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                golfie = argFoo;
                michal = _closure1_slot8;
                entity = michal.isFullServerPreview;
                entity = entity.bind(michal)(golfie);
                if(entity) { _fun00022_ip = 59; continue _fun00021 }
 24:
                entity = _closure1_slot13;
                zuuluu = entity[golfie];
                michal = null;
                tangon = michal == zuuluu;
                entity = undefined;
                if(tangon) { _fun00022_ip = 49; continue _fun00021 }
 43:
                entity = zuuluu.responses;
 49:
                if(!(michal == entity)) { _fun00022_ip = 57; continue _fun00021 }
 53:
                entity = _closure1_slot18;
 57:
                _fun00022_ip = 102; continue _fun00021;
 59:
                michal = global;
                tangon = michal.Array;
                zuuluu = tangon.from;
                oscard = _closure1_slot8;
                michal = oscard.getOnboardingResponses;
                michal = michal.bind(oscard)(golfie);
                oscard = null;
                if(!(oscard == michal)) { _fun00022_ip = 97; continue _fun00021 }
 93:
                michal = _closure1_slot18;
 97:
                entity = zuuluu.bind(tangon)(michal);
 102:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getSelectedOptions';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = argFoo;
            zuuluu = this;
            michal = zuuluu.getOnboardingResponses;
            michal = michal.bind(zuuluu)(tangon);
            var _closure3_slot0 = michal;
            michal = zuuluu.getOnboardingPrompts;
            tangon = michal.bind(zuuluu)(tangon);
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.options;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.flat;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.filter;
            entity = function(argFoo) {
                zuuluu = _closure3_slot0;
                michal = zuuluu.includes;
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getOnboardingResponsesForPrompt';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                golfie = argFoo;
                oscard = this;
                entity = argBar;
                var _closure3_slot0 = entity;
                zuuluu = _closure1_slot13;
                zuuluu = zuuluu[golfie];
                tangon = null;
                if(!(tangon != zuuluu)) { _fun00024_ip = 130; continue _fun00023 }
 32:
                option = zuuluu.prompts;
                report = option.find;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    michal = entity.id;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    return entity;
                };
                zuuluu = report.bind(option)(zuuluu);
                if(!(tangon != zuuluu)) { _fun00024_ip = 124; continue _fun00023 }
 57:
                option = _closure1_slot1;
                report = _closure1_slot2;
                tangon = 10;
                report = report[tangon];
                tangon = undefined;
                report = option.bind(tangon)(report);
                tangon = report.intersection;
                option = zuuluu.options;
                zuuluu = option.map;
                michal = function(argFoo) {
                    entity = argFoo;
                    entity = entity.id;
                    return entity;
                };
                zuuluu = zuuluu.bind(option)(michal);
                michal = oscard.getOnboardingResponses;
                michal = michal.bind(oscard)(golfie);
                michal = tangon.bind(report)(zuuluu, michal);
                _fun00024_ip = 128; continue _fun00023;
 124:
                michal = _closure1_slot18;
 128:
                return michal;
 130:
                entity = _closure1_slot18;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getEnabledOnboardingPrompts';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                tangon = argFoo;
                entity = _closure1_slot13;
                report = entity[tangon];
                michal = _closure1_slot8;
                entity = michal.isFullServerPreview;
                entity = entity.bind(michal)(tangon);
                tangon = null;
                if(entity) { _fun00026_ip = 62; continue _fun00025 }
 34:
                if(!(tangon != report)) { _fun00026_ip = 56; continue _fun00025 }
 38:
                entity = report.enabled;
                if(!entity) { _fun00026_ip = 56; continue _fun00025 }
 46:
                entity = report.prompts;
                if(!(tangon == entity)) { _fun00026_ip = 60; continue _fun00025 }
 56:
                entity = _closure1_slot17;
 60:
                _fun00026_ip = 88; continue _fun00025;
 62:
                oscard = tangon == report;
                michal = undefined;
                if(oscard) { _fun00026_ip = 77; continue _fun00025 }
 71:
                michal = report.prompts;
 77:
                if(!(tangon == michal)) { _fun00026_ip = 85; continue _fun00025 }
 81:
                michal = _closure1_slot17;
 85:
                entity = michal;
 88:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getDefaultChannelIds';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                zuuluu = _closure1_slot13;
                entity = argFoo;
                tangon = zuuluu[entity];
                zuuluu = null;
                report = zuuluu == tangon;
                entity = undefined;
                if(report) { _fun00028_ip = 31; continue _fun00027 }
 25:
                entity = tangon.defaultChannelIds;
 31:
                if(!(zuuluu == entity)) { _fun00028_ip = 39; continue _fun00027 }
 35:
                entity = _closure1_slot19;
 39:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getEnabled';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                zuuluu = argFoo;
                tangon = _closure1_slot8;
                entity = tangon.isFullServerPreview;
                entity = entity.bind(tangon)(zuuluu);
                michal = _closure1_slot13;
                zuuluu = michal[zuuluu];
                michal = null;
                if(entity) { _fun00030_ip = 60; continue _fun00029 }
 34:
                entity = michal == zuuluu;
                tangon = undefined;
                if(entity) { _fun00030_ip = 48; continue _fun00029 }
 43:
                tangon = zuuluu.enabled;
 48:
                entity = michal != tangon;
                if(!entity) { _fun00030_ip = 58; continue _fun00029 }
 55:
                entity = tangon;
 58:
                _fun00030_ip = 64; continue _fun00029;
 60:
                entity = michal != zuuluu;
 64:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'getOnboardingPrompt';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = global;
            tangon = michal.Object;
            zuuluu = tangon.values;
            michal = _closure1_slot13;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.prompts;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.flat;
            zuuluu = michal.bind(zuuluu)();
            michal = zuuluu.find;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.id;
                entity = _closure3_slot0;
                entity = michal === entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'isLoading';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot16;
            return entity;
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'shouldFetchPrompts';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                zuuluu = arguments[1];
                tangon = undefined;
                if(!(zuuluu === tangon)) { _fun00032_ip = 44; continue _fun00031 }
 9:
                michal = _closure1_slot1;
                report = _closure1_slot2;
                entity = 11;
                entity = report[entity];
                entity = michal.bind(tangon)(entity);
                entity = entity.Millis;
                zuuluu = entity.HOUR;
 44:
                michal = _closure1_slot16;
                if(michal) { _fun00032_ip = 101; continue _fun00031 }
 54:
                michal = _closure1_slot15;
                entity = argFoo;
                tangon = michal[entity];
                entity = null;
                entity = entity == tangon;
                if(entity) { _fun00032_ip = 99; continue _fun00031 }
 74:
                michal = global;
                report = michal.Date;
                michal = report.now;
                michal = michal.bind(report)();
                michal = michal - tangon;
                entity = michal > zuuluu;
 99:
                return entity;
 101:
                entity = false;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'getPendingResponseOptions';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot14;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'ackIdForGuild';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = this;
            zuuluu = tangon.getEnabledOnboardingPrompts;
            michal = argFoo;
            tangon = zuuluu.bind(tangon)(michal);
            michal = '0';
            var _closure3_slot0 = michal;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.options;
                    zuuluu = tangon.forEach;
                    entity = function(argFoo) {
                        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                            michal = argFoo;
                            tangon = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            entity = 12;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            golfie = tangon.bind(entity)(zuuluu);
                            oscard = golfie.compare;
                            report = michal.id;
                            tangon = _closure3_slot0;
                            report = oscard.bind(golfie)(report, tangon);
                            tangon = 0;
                            if(!(report > tangon)) { _fun00036_ip = 67; continue _fun00035 }
 58:
                            michal = michal.id;
                            _closure3_slot0 = michal;
 67:
                            return entity;
                        }
                    };
                    entity = zuuluu.bind(tangon)(entity);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 12;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    golfie = tangon.bind(entity)(zuuluu);
                    oscard = golfie.compare;
                    report = michal.id;
                    tangon = _closure3_slot0;
                    report = oscard.bind(golfie)(report, tangon);
                    tangon = 0;
                    if(!(report > tangon)) { _fun00034_ip = 89; continue _fun00033 }
 80:
                    michal = michal.id;
                    _closure3_slot0 = michal;
 89:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            entity = _closure3_slot0;
            return entity;
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'lastFetchedAt';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot15;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'isAdvancedMode';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                report = argFoo;
                zuuluu = null;
                entity = zuuluu != report;
                if(!entity) { _fun00038_ip = 51; continue _fun00037 }
 12:
                tangon = _closure1_slot13;
                tangon = tangon[report];
                report = zuuluu == tangon;
                zuuluu = undefined;
                if(report) { _fun00038_ip = 37; continue _fun00037 }
 32:
                zuuluu = tangon.mode;
 37:
                michal = _closure1_slot12;
                michal = michal.ONBOARDING_ADVANCED;
                entity = zuuluu === michal;
 51:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[15] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'GuildOnboardingPromptsStore';
    option['displayName'] = michal;
    michal = 14;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    offset = function() { // Original name: handleConnectionOpen
        entity = false;
        _closure1_slot16 = entity;
        entity = {};
        _closure1_slot13 = entity;
        entity = undefined;
        return entity;
    };
    michal['CONNECTION_OPEN'] = offset;
    offset = function() { // Original name: handleStart
        entity = true;
        _closure1_slot16 = entity;
        entity = undefined;
        return entity;
    };
    michal['GUILD_ONBOARDING_PROMPTS_FETCH_START'] = offset;
    offset = function(argFoo) { // Original name: handleSuccess
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            var _closure2_slot0 = tangon;
            golfie = entity.prompts;
            romeon = entity.defaultChannelIds;
            kiloes = entity.enabled;
            report = entity.responses;
            verify = entity.onboardingPromptsSeen;
            option = entity.onboardingResponsesSeen;
            foxtra = entity.mode;
            yankee = entity.belowRequirements;
            entity = false;
            _closure1_slot16 = entity;
            zuuluu = _closure1_slot10;
            entity = zuuluu.getOnboardingStatus;
            zuuluu = entity.bind(zuuluu)(tangon);
            entity = _closure1_slot11;
            entity = entity.READY;
            zuuluu = zuuluu === entity;
            oscard = _closure1_slot22;
            entity = undefined;
            backup = oscard.bind(entity)(golfie, verify, option);
            golfie = _closure1_slot13;
            oscard = {};
            oscard['enabled'] = kiloes;
            oscard['mode'] = foxtra;
            oscard['belowRequirements'] = yankee;
            oscard['prompts'] = backup;
            foxtra = backup.filter;
            yankee = function(argFoo) {
                entity = argFoo;
                entity = entity.inOnboarding;
                return entity;
            };
            yankee = foxtra.bind(backup)(yankee);
            oscard['onboardingPrompts'] = yankee;
            yankee = romeon.filter;
            offset = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.canChannelBeDefault;
                michal = _closure2_slot0;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            offset = yankee.bind(romeon)(offset);
            oscard['defaultChannelIds'] = offset;
            offset = report;
            if(!zuuluu) { _fun00040_ip = 187; continue _fun00039 }
 183:
            offset = new Array(0);
 187:
            oscard['responses'] = offset;
            oscard['onboardingPromptsSeen'] = verify;
            oscard['onboardingResponsesSeen'] = option;
            golfie[tangon] = oscard;
            if(zuuluu) { _fun00040_ip = 219; continue _fun00039 }
 209:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.bind(entity)(tangon, report);
 219:
            zuuluu = _closure1_slot15;
            michal = global;
            report = michal.Date;
            michal = report.now;
            michal = michal.bind(report)();
            zuuluu[tangon] = michal;
            return entity;
        }
    };
    michal['GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS'] = offset;
    offset = function() { // Original name: handleFailure
        entity = false;
        _closure1_slot16 = entity;
        entity = undefined;
        return entity;
    };
    michal['GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE'] = offset;
    offset = function(argFoo) { // Original name: handleOptionSelect
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            entity = argFoo;
            report = entity.guildId;
            var _closure2_slot0 = report;
            offset = entity.optionId;
            verify = entity.selected;
            golfie = entity.removedOptionIds;
            michal = _closure1_slot8;
            entity = michal.isFullServerPreview;
            entity = entity.bind(michal)(report);
            michal = !entity;
            entity = !michal;
            if(!michal) { _fun00042_ip = 307; continue _fun00041 }
 62:
            michal = _closure1_slot13;
            michal = michal[report];
            oscard = null;
            michal = oscard != michal;
            if(!michal) { _fun00042_ip = 304; continue _fun00041 }
 82:
            option = oscard != golfie;
            if(!option) { _fun00042_ip = 100; continue _fun00041 }
 89:
            romeon = golfie.length;
            yankee = 0;
            option = romeon > yankee;
 100:
            if(!option) { _fun00042_ip = 151; continue _fun00041 }
 103:
            romeon = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 10;
            yankee = yankee[option];
            option = undefined;
            romeon = romeon.bind(option)(yankee);
            yankee = romeon.pullAll;
            option = _closure1_slot13;
            option = option[report];
            option = option.responses;
            option = yankee.bind(romeon)(option, golfie);
 151:
            if(verify) { _fun00042_ip = 204; continue _fun00041 }
 154:
            romeon = _closure1_slot1;
            yankee = _closure1_slot2;
            option = 10;
            yankee = yankee[option];
            option = undefined;
            romeon = romeon.bind(option)(yankee);
            yankee = romeon.pull;
            option = _closure1_slot13;
            option = option[report];
            option = option.responses;
            option = yankee.bind(romeon)(option, offset);
            _fun00042_ip = 228; continue _fun00041;
 204:
            option = _closure1_slot13;
            option = option[report];
            yankee = option.responses;
            option = yankee.push;
            option = option.bind(yankee)(offset);
 228:
            option = _closure1_slot14;
            option = option[report];
            if(!(oscard == option)) { _fun00042_ip = 250; continue _fun00041 }
 240:
            yankee = _closure1_slot14;
            option = {};
            yankee[report] = option;
 250:
            option = _closure1_slot14;
            option = option[report];
            option[offset] = verify;
            if(!(oscard != golfie)) { _fun00042_ip = 281; continue _fun00041 }
 266:
            oscard = golfie.forEach;
            tangon = function(argFoo) {
                michal = _closure1_slot14;
                entity = _closure2_slot0;
                zuuluu = michal[entity];
                entity = false;
                michal = argFoo;
                zuuluu[michal] = entity;
                return entity;
            };
            tangon = oscard.bind(golfie)(tangon);
 281:
            tangon = _closure1_slot14;
            zuuluu = {};
            foxtra = tangon[report];
            backup = zuuluu;
            oscard = copyDataProperties(backup, foxtra);
            tangon[report] = zuuluu;
            michal = true;
 304:
            entity = michal;
 307:
            return entity;
        }
    };
    michal['GUILD_ONBOARDING_SELECT_OPTION'] = offset;
    offset = function(argFoo) { // Original name: handleUpdateResponsesSuccess
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            entity = argFoo;
            tangon = entity.guildId;
            report = entity.options;
            golfie = entity.prompts_seen;
            oscard = entity.options_seen;
            zuuluu = _closure1_slot23;
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(tangon, report);
            zuuluu = _closure1_slot13;
            report = zuuluu[tangon];
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00044_ip = 146; continue _fun00043 }
 54:
            option = _closure1_slot22;
            zuuluu = report.prompts;
            verify = option.bind(entity)(zuuluu, golfie, oscard);
            zuuluu = _closure1_slot13;
            michal = {};
            romeon = michal;
            yankee = report;
            report = copyDataProperties(romeon, yankee);
            report = 'prompts';
            michal[report] = verify;
            option = verify.filter;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.inOnboarding;
                return entity;
            };
            option = option.bind(verify)(report);
            report = 'onboardingPrompts';
            michal[report] = option;
            report = 'onboardingPromptsSeen';
            michal[report] = golfie;
            report = 'onboardingResponsesSeen';
            michal[report] = oscard;
            zuuluu[tangon] = michal;
            return entity;
 146:
            entity = false;
            return entity;
        }
    };
    michal['GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS'] = offset;
    michal['GUILD_ONBOARDING_PROMPTS_LOCAL_UPDATE'] = verify;
    michal['GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS'] = verify;
    verify = function(argFoo) { // Original name: handleUpdateDefaultChannels
        entity = argFoo;
        zuuluu = entity.guildId;
        report = entity.channelIds;
        michal = _closure1_slot13;
        entity = {};
        oscard = michal[zuuluu];
        golfie = entity;
        tangon = copyDataProperties(golfie, oscard);
        tangon = 'defaultChannelIds';
        entity[tangon] = report;
        michal[zuuluu] = entity;
        entity = undefined;
        return entity;
    };
    michal['GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS'] = verify;
    tangon = function(argFoo) { // Original name: handleSetMode
        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.guildId;
            michal = entity.mode;
            entity = _closure1_slot13;
            entity = entity[zuuluu];
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00046_ip = 36; continue _fun00045 }
 30:
            entity['mode'] = michal;
 36:
            entity = undefined;
            return entity;
        }
    };
    michal['GUILD_SETTINGS_ONBOARDING_SET_MODE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    backup = tangon;
    romeon = michal;
    michal = new backup[option](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding/GuildOnboardingPromptsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();