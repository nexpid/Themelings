// discord_common/js/packages/i18n/parse.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = option;
    tangon = function(argFoo) { // Original name: setUpdateRules
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        tangon = 6;
        golfie = oscard[tangon];
        entity = undefined;
        golfie = report.bind(entity)(golfie);
        verify = golfie.rules;
        option = function(argFoo, argBar) { // Original name: parserFor
            golfie = argFoo;
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            michal = 5;
            zuuluu = option[michal];
            report = undefined;
            verify = oscard.bind(report)(zuuluu);
            tangon = verify.parserFor;
            zuuluu = argBar;
            zuuluu = zuuluu.bind(report)(golfie);
            zuuluu = tangon.bind(verify)(zuuluu);
            var _closure3_slot0 = zuuluu;
            zuuluu = option[michal];
            tangon = oscard.bind(report)(zuuluu);
            zuuluu = tangon.reactFor;
            michal = option[michal];
            oscard = oscard.bind(report)(michal);
            report = oscard.ruleOutput;
            michal = 'react';
            michal = report.bind(oscard)(golfie, michal);
            michal = zuuluu.bind(tangon)(michal);
            var _closure3_slot1 = michal;
            entity = function(argFoo, argBar, argBaz) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.includes;
                    entity = '\n\n';
                    michal = michal.bind(zuuluu)(entity);
                    michal = !michal;
                    report = zuuluu;
                    if(michal) { _fun00002_ip = 32; continue _fun00001 }
 28:
                    report = zuuluu + entity;
 32:
                    zuuluu = _closure3_slot1;
                    tangon = _closure3_slot0;
                    entity = {};
                    entity['inline'] = michal;
                    michal = argBar;
                    entity['context'] = michal;
                    michal = argBaz;
                    entity['unsafeContext'] = michal;
                    michal = undefined;
                    entity = tangon.bind(michal)(report, entity);
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                }
            };
            return entity;
        };
        golfie = argFoo;
        golfie = option.bind(entity)(verify, golfie);
        var _closure1_slot3 = golfie;
        tangon = oscard[tangon];
        tangon = report.bind(entity)(tangon);
        tangon = tangon.rules;
        michal = function(argFoo) { // Original name: parserForNonReact
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 5;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.parserFor;
            michal = argFoo;
            michal = zuuluu.bind(tangon)(michal);
            var _closure3_slot0 = michal;
            entity = function(argFoo, argBar, argBaz) {
                tangon = _closure3_slot0;
                michal = argFoo;
                entity = '\n\n';
                zuuluu = michal + entity;
                michal = {};
                entity = false;
                michal['inline'] = entity;
                entity = argBar;
                michal['context'] = entity;
                entity = argBaz;
                michal['unsafeContext'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            return entity;
        };
        michal = michal.bind(entity)(tangon);
        var _closure1_slot4 = michal;
        return entity;
    };
    var _closure1_slot13 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = option[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 1;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 2;
    report = option[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 3;
    report = option[report];
    report = golfie.bind(entity)(report);
    oscard = report.FORMAT_RE;
    var _closure1_slot8 = oscard;
    oscard = report.MARKDOWN_RE;
    var _closure1_slot9 = oscard;
    oscard = report.UNSAFE_RE;
    var _closure1_slot10 = oscard;
    report = report.UNSAFE_RE_ALL;
    var _closure1_slot11 = report;
    report = function() {
        tangon = _closure1_slot7;
        zuuluu = function(argFoo, argBar, argBaz) { // Original name: FormattedMessage
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                verify = argFoo;
                tangon = argBaz;
                zuuluu = this;
                oscard = _closure1_slot6;
                report = _closure2_slot0;
                entity = undefined;
                report = oscard.bind(entity)(zuuluu, report);
                report = verify;
                if(tangon) { _fun00004_ip = 56; continue _fun00003 }
 37:
                option = verify.replace;
                golfie = _closure1_slot11;
                oscard = '';
                report = option.bind(verify)(golfie, oscard);
 56:
                zuuluu['message'] = report;
                zuuluu['hasMarkdown'] = tangon;
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                michal = 4;
                michal = report[michal];
                oscard = tangon.bind(entity)(michal);
                yankee = zuuluu.message;
                michal = oscard.prototype;
                tangon = Object.create(michal, {constructor: {value: oscard}});
                offset = argBar;
                romeon = tangon;
                michal = new romeon[oscard](yankee, offset, verify);
                michal = michal instanceof Object ? michal : tangon;
                zuuluu['intlMessage'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'format';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = argFoo;
                entity = this;
                michal = entity.hasMarkdown;
                if(michal) { _fun00006_ip = 33; continue _fun00005 }
 15:
                tangon = entity.intlMessage;
                michal = tangon.format;
                michal = michal.bind(tangon)(zuuluu);
                return michal;
 33:
                michal = entity.getContext;
                oscard = michal.bind(entity)(zuuluu);
                tangon = _closure1_slot5;
                report = undefined;
                zuuluu = 2;
                oscard = tangon.bind(report)(oscard, zuuluu);
                zuuluu = 0;
                tangon = oscard[zuuluu];
                zuuluu = 1;
                zuuluu = oscard[zuuluu];
                michal = _closure1_slot3;
                oscard = entity.intlMessage;
                entity = oscard.format;
                entity = entity.bind(oscard)(tangon);
                entity = michal.bind(report)(entity, tangon, zuuluu);
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'astFormat';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.getContext;
            michal = argFoo;
            oscard = zuuluu.bind(entity)(michal);
            tangon = _closure1_slot5;
            report = undefined;
            zuuluu = 2;
            oscard = tangon.bind(report)(oscard, zuuluu);
            zuuluu = 0;
            tangon = oscard[zuuluu];
            zuuluu = 1;
            zuuluu = oscard[zuuluu];
            michal = _closure1_slot4;
            oscard = entity.intlMessage;
            entity = oscard.format;
            entity = entity.bind(oscard)(tangon);
            entity = michal.bind(report)(entity, tangon, zuuluu);
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'plainFormat';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity.intlMessage;
            michal = zuuluu.format;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'getContext';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                kiloes = this;
                michal = {};
                report = _closure1_slot10;
                tangon = report.test;
                entity = kiloes.message;
                entity = tangon.bind(report)(entity);
                if(!entity) { _fun00008_ip = 182; continue _fun00007 }
 36:
                foxtra = global;
                tangon = foxtra.Object;
                entity = tangon.entries;
                romeon = entity.bind(tangon)(zuuluu);
                entity = romeon.length;
                yankee = 0;
                entity = yankee < entity;
                offset = undefined;
                verify = 2;
                option = 1;
                golfie = '!!{';
                oscard = '}!!';
                report = 0;
                tangon = 0;
                if(!entity) { _fun00008_ip = 182; continue _fun00007 }
 93:
                sizing = romeon[tangon];
                entity = _closure1_slot5;
                entity = entity.bind(offset)(sizing, verify);
                output = entity[yankee];
                result = entity[option];
                echoed = kiloes.message;
                sizing = echoed.includes;
                entity = foxtra.HermesInternal;
                entity = entity.concat;
                entity = entity.bind(golfie)(output, oscard);
                entity = sizing.bind(echoed)(entity);
                sizing = report;
                if(!entity) { _fun00008_ip = 167; continue _fun00007 }
 153:
                entity = report + 1;
                michal[entity] = result;
                zuuluu[output] = entity;
                sizing = entity;
 167:
                tangon = tangon + 1;
                entity = romeon.length;
                report = sizing;
                if(tangon < entity) { _fun00008_ip = 93; continue _fun00007 }
 182:
                entity = new Array(2);
                entity[0] = zuuluu;
                entity[1] = michal;
                return entity;
            }
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    report = report.bind(entity)();
    var _closure1_slot12 = report;
    oscard = 8;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = '../discord_common/js/packages/i18n/parse.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['FormattedMessage'] = report;
    zuuluu['setUpdateRules'] = tangon;
    michal = function(argFoo, argBar) { // Original name: getMessage
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00010_ip = 160; continue _fun00009 }
 12:
            entity = _closure1_slot3;
            if(!(zuuluu == entity)) { _fun00010_ip = 59; continue _fun00009 }
 23:
            tangon = _closure1_slot13;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 7;
            entity = zuuluu[entity];
            zuuluu = undefined;
            entity = oscard.bind(zuuluu)(entity);
            entity = entity.default;
            entity = tangon.bind(zuuluu)(entity);
 59:
            tangon = report.replace;
            zuuluu = /^\n+|\n+$/g;
            entity = '';
            oscard = tangon.bind(report)(zuuluu, entity);
            zuuluu = _closure1_slot8;
            entity = zuuluu.test;
            entity = entity.bind(zuuluu)(oscard);
            tangon = _closure1_slot9;
            zuuluu = tangon.test;
            report = zuuluu.bind(tangon)(oscard);
            if(entity) { _fun00010_ip = 125; continue _fun00009 }
 119:
            entity = oscard;
            if(!report) { _fun00010_ip = 158; continue _fun00009 }
 125:
            tangon = _closure1_slot12;
            michal = tangon.prototype;
            zuuluu = Object.create(michal, {constructor: {value: tangon}});
            option = argBar;
            offset = zuuluu;
            verify = oscard;
            golfie = report;
            michal = new offset[tangon](verify, option, golfie, oscard);
            entity = michal instanceof Object ? michal : zuuluu;
 158:
            return entity;
 160:
            entity = '';
            return entity;
        }
    };
    zuuluu['getMessage'] = michal;
    return entity;
})();