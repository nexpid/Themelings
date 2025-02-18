// app/stores/MaskedLinkStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        report = argBar;
        golfie = argBaz;
        zuuluu = argFre;
        oscard = argPlu;
        var _closure1_slot0 = report;
        var _closure1_slot1 = golfie;
        var _closure1_slot2 = oscard;
        entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                oscard = argBaz;
                michal = _closure1_slot6;
                zuuluu = undefined;
                entity = argBar;
                verify = michal.bind(zuuluu)(entity);
                michal = _closure1_slot5;
                entity = _closure1_slot13;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 51; continue _fun00003 }
 38:
                entity = verify.apply;
                entity = entity.bind(verify)(tangon, oscard);
                _fun00004_ip = 92; continue _fun00003;
 51:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                if(oscard) { _fun00004_ip = 71; continue _fun00003 }
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
        var _closure1_slot12 = entity;
        entity = function() { // Original name: _isNativeReflectConstruct
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
                _fun00006_ip = 74; continue _fun00005;
 72: // catch_target0
                CatchBlockStart(arg_register=1);
 74:
                michal = function() { // Original name: _isNativeReflectConstruct
                    entity = _closure2_slot0;
                    entity = !entity;
                    entity = !entity;
                    return entity;
                };
                _closure1_slot13 = michal;
                entity = undefined;
                entity = michal.bind(entity)();
                return entity;
            }
        };
        var _closure1_slot13 = entity;
        entity = function(argFoo) { // Original name: _isTrustedDomain
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 6;
                entity = tangon[entity];
                oscard = undefined;
                tangon = zuuluu.bind(oscard)(entity);
                zuuluu = tangon.getHostname;
                entity = argFoo;
                tangon = zuuluu.bind(tangon)(entity);
                entity = global;
                zuuluu = entity.window;
                zuuluu = zuuluu.GLOBAL_ENV;
                zuuluu = zuuluu.CDN_HOST;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 226; continue _fun00007 }
 66:
                zuuluu = entity.window;
                zuuluu = zuuluu.GLOBAL_ENV;
                zuuluu = zuuluu.INVITE_HOST;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 226; continue _fun00007 }
 91:
                zuuluu = entity.window;
                zuuluu = zuuluu.GLOBAL_ENV;
                zuuluu = zuuluu.GIFT_CODE_HOST;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 226; continue _fun00007 }
 113:
                zuuluu = entity.window;
                zuuluu = zuuluu.GLOBAL_ENV;
                zuuluu = zuuluu.GUILD_TEMPLATE_HOST;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 226; continue _fun00007 }
 135:
                zuuluu = _closure1_slot11;
                if(!(zuuluu !== tangon)) { _fun00008_ip = 226; continue _fun00007 }
 143:
                entity = entity.location;
                entity = entity.hostname;
                if(!(entity !== tangon)) { _fun00008_ip = 226; continue _fun00007 }
 159:
                zuuluu = _closure1_slot8;
                entity = zuuluu.includes;
                entity = entity.bind(zuuluu)(tangon);
                if(entity) { _fun00008_ip = 207; continue _fun00007 }
 176:
                report = _closure1_slot1;
                golfie = _closure1_slot2;
                zuuluu = 7;
                zuuluu = golfie[zuuluu];
                report = report.bind(oscard)(zuuluu);
                zuuluu = report.isDiscordHostname;
                entity = zuuluu.bind(report)(tangon);
 207:
                if(entity) { _fun00008_ip = 224; continue _fun00007 }
 210:
                zuuluu = _closure1_slot9;
                michal = zuuluu.has;
                entity = michal.bind(zuuluu)(tangon);
 224:
                return entity;
 226:
                entity = true;
                return entity;
            }
        };
        var _closure1_slot14 = entity;
        entity = function(argFoo) { // Original name: _isTrustedProtocol
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.getProtocol;
            michal = argFoo;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = _closure1_slot10;
            entity = michal.has;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        };
        var _closure1_slot15 = entity;
        michal = global;
        offset = michal.Object;
        verify = offset.defineProperty;
        option = {};
        entity = true;
        option['value'] = entity;
        entity = '__esModule';
        entity = verify.bind(offset)(zuuluu, entity, option);
        entity = 0;
        option = oscard[entity];
        entity = undefined;
        option = golfie.bind(entity)(option);
        var _closure1_slot3 = option;
        option = 1;
        option = oscard[option];
        option = golfie.bind(entity)(option);
        var _closure1_slot4 = option;
        option = 2;
        option = oscard[option];
        option = golfie.bind(entity)(option);
        var _closure1_slot5 = option;
        option = 3;
        option = oscard[option];
        option = golfie.bind(entity)(option);
        var _closure1_slot6 = option;
        option = 4;
        option = oscard[option];
        option = golfie.bind(entity)(option);
        var _closure1_slot7 = option;
        option = 5;
        option = oscard[option];
        option = report.bind(entity)(option);
        option = option.SPOTIFY_HOSTNAMES;
        var _closure1_slot8 = option;
        option = michal.Set;
        verify = option.prototype;
        verify = Object.create(verify, {constructor: {value: option}});
        kiloes = verify;
        option = new kiloes[option](backup);
        option = option instanceof Object ? option : verify;
        var _closure1_slot9 = option;
        option = michal.Set;
        verify = option.prototype;
        verify = Object.create(verify, {constructor: {value: option}});
        kiloes = verify;
        option = new kiloes[option](backup);
        option = option instanceof Object ? option : verify;
        var _closure1_slot10 = option;
        michal = michal.window;
        michal = michal.GLOBAL_ENV;
        yankee = michal.MEDIA_PROXY_ENDPOINT;
        michal = null;
        option = michal == yankee;
        michal = undefined;
        if(option) { _fun00002_ip = 307; continue _fun00001 }
 286:
        offset = yankee.replace;
        verify = '//';
        option = '';
        michal = offset.bind(yankee)(verify, option);
 307:
        var _closure1_slot11 = michal;
        michal = 9;
        michal = oscard[michal];
        michal = golfie.bind(entity)(michal);
        option = michal.Store;
        michal = function(argFoo) {
            tangon = function() { // Original name: MaskedLinkStore
                report = this;
                tangon = undefined;
                entity = undefined;
                oscard = _closure1_slot3;
                zuuluu = _closure2_slot0;
                oscard = oscard.bind(tangon)(report, zuuluu);
                michal = _closure1_slot12;
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
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 8;
                    michal = michal[entity];
                    entity = undefined;
                    michal = tangon.bind(entity)(michal);
                    report = michal.Storage;
                    tangon = report.get;
                    michal = 'MaskedLinkStore';
                    report = tangon.bind(report)(michal);
                    oscard = null;
                    if(!(oscard == report)) { _fun00010_ip = 55; continue _fun00009 }
 53:
                    report = {};
 55:
                    michal = global;
                    golfie = michal.Array;
                    tangon = golfie.isArray;
                    tangon = tangon.bind(golfie)(report);
                    option = report;
                    if(tangon) { _fun00010_ip = 212; continue _fun00009 }
 82:
                    yankee = option.trustedDomains;
                    offset = option.trustedProtocols;
                    golfie = michal.Set;
                    report = oscard != yankee;
                    tangon = null;
                    if(!report) { _fun00010_ip = 125; continue _fun00009 }
 109:
                    verify = michal.Array;
                    report = verify.from;
                    tangon = report.bind(verify)(yankee);
 125:
                    report = golfie.prototype;
                    report = Object.create(report, {constructor: {value: golfie}});
                    foxtra = report;
                    romeon = tangon;
                    tangon = new foxtra[golfie](romeon, yankee);
                    tangon = tangon instanceof Object ? tangon : report;
                    _closure1_slot9 = tangon;
                    golfie = michal.Set;
                    report = oscard != offset;
                    tangon = null;
                    if(!report) { _fun00010_ip = 183; continue _fun00009 }
 167:
                    verify = michal.Array;
                    report = verify.from;
                    tangon = report.bind(verify)(offset);
 183:
                    report = golfie.prototype;
                    report = Object.create(report, {constructor: {value: golfie}});
                    foxtra = report;
                    romeon = tangon;
                    tangon = new foxtra[golfie](romeon, yankee);
                    tangon = tangon instanceof Object ? tangon : report;
                    _closure1_slot10 = tangon;
                    _fun00010_ip = 300; continue _fun00009;
 212:
                    tangon = michal.Set;
                    report = oscard != option;
                    oscard = null;
                    if(!report) { _fun00010_ip = 243; continue _fun00009 }
 227:
                    golfie = michal.Array;
                    report = golfie.from;
                    oscard = report.bind(golfie)(option);
 243:
                    report = tangon.prototype;
                    report = Object.create(report, {constructor: {value: tangon}});
                    foxtra = report;
                    romeon = oscard;
                    tangon = new foxtra[tangon](romeon, yankee);
                    tangon = tangon instanceof Object ? tangon : report;
                    _closure1_slot9 = tangon;
                    michal = michal.Set;
                    tangon = michal.prototype;
                    tangon = Object.create(tangon, {constructor: {value: michal}});
                    foxtra = tangon;
                    michal = new foxtra[michal](romeon);
                    michal = michal instanceof Object ? michal : tangon;
                    _closure1_slot10 = michal;
 300:
                    return entity;
                }
            };
            report['value'] = entity;
            entity = new Array(3);
            entity[0] = report;
            report = {};
            golfie = 'isTrustedDomain';
            report['key'] = golfie;
            golfie = function(argFoo) { // Original name: value
                zuuluu = _closure1_slot14;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            report['value'] = golfie;
            entity[1] = report;
            report = {};
            golfie = 'isTrustedProtocol';
            report['key'] = golfie;
            oscard = function(argFoo) { // Original name: value
                zuuluu = _closure1_slot15;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            report['value'] = oscard;
            entity[2] = report;
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        };
        option = michal.bind(entity)(option);
        michal = 'MaskedLinkStore';
        option['displayName'] = michal;
        michal = 10;
        michal = oscard[michal];
        backup = golfie.bind(entity)(michal);
        michal = {};
        verify = function(argFoo) { // Original name: handleAddTrustedDomain
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                verify = entity.url;
                zuuluu = _closure1_slot14;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(verify);
                if(zuuluu) { _fun00012_ip = 127; continue _fun00011 }
 25:
                golfie = _closure1_slot9;
                oscard = golfie.add;
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 6;
                zuuluu = report[zuuluu];
                option = tangon.bind(entity)(zuuluu);
                zuuluu = option.getHostname;
                zuuluu = zuuluu.bind(option)(verify);
                zuuluu = oscard.bind(golfie)(zuuluu);
                zuuluu = 8;
                zuuluu = report[zuuluu];
                zuuluu = tangon.bind(entity)(zuuluu);
                report = zuuluu.Storage;
                tangon = report.set;
                zuuluu = {};
                oscard = _closure1_slot9;
                zuuluu['trustedDomains'] = oscard;
                michal = _closure1_slot10;
                zuuluu['trustedProtocols'] = michal;
                michal = 'MaskedLinkStore';
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
 127:
                entity = false;
                return entity;
            }
        };
        michal['MASKED_LINK_ADD_TRUSTED_DOMAIN'] = verify;
        tangon = function(argFoo) { // Original name: handleAddTrustedProtocol
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                verify = entity.url;
                zuuluu = _closure1_slot15;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(verify);
                if(zuuluu) { _fun00014_ip = 127; continue _fun00013 }
 25:
                golfie = _closure1_slot10;
                oscard = golfie.add;
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                zuuluu = 6;
                zuuluu = report[zuuluu];
                option = tangon.bind(entity)(zuuluu);
                zuuluu = option.getProtocol;
                zuuluu = zuuluu.bind(option)(verify);
                zuuluu = oscard.bind(golfie)(zuuluu);
                zuuluu = 8;
                zuuluu = report[zuuluu];
                zuuluu = tangon.bind(entity)(zuuluu);
                report = zuuluu.Storage;
                tangon = report.set;
                zuuluu = {};
                oscard = _closure1_slot9;
                zuuluu['trustedDomains'] = oscard;
                michal = _closure1_slot10;
                zuuluu['trustedProtocols'] = michal;
                michal = 'MaskedLinkStore';
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
 127:
                entity = false;
                return entity;
            }
        };
        michal['MASKED_LINK_ADD_TRUSTED_PROTOCOL'] = tangon;
        tangon = option.prototype;
        tangon = Object.create(tangon, {constructor: {value: option}});
        kiloes = tangon;
        foxtra = michal;
        michal = new kiloes[option](backup, foxtra, romeon);
        michal = michal instanceof Object ? michal : tangon;
        tangon = 11;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.fileFinishedImporting;
        tangon = 'stores/MaskedLinkStore.tsx';
        tangon = report.bind(oscard)(tangon);
        zuuluu['default'] = michal;
        return entity;
    }
})();