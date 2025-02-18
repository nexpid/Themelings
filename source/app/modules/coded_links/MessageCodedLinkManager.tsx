// app/modules/coded_links/MessageCodedLinkManager.tsx
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
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot12;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, zuuluu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscard = global;
            option = oscard.Reflect;
            golfie = option.construct;
            oscard = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 86:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: resolveMessageCodedLinks
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = argFoo;
            michal = michal.content;
            tangon = zuuluu.bind(entity)(michal);
            michal = null;
            michal = michal != tangon;
            if(!michal) { _fun00006_ip = 58; continue _fun00005 }
 47:
            report = tangon.length;
            zuuluu = 0;
            michal = zuuluu !== report;
 58:
            if(!michal) { _fun00006_ip = 80; continue _fun00005 }
 61:
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    option = entity.type;
                    oscard = entity.code;
                    var _closure3_slot0 = oscard;
                    tangon = _closure1_slot0;
                    entity = _closure1_slot2;
                    golfie = 9;
                    zuuluu = entity[golfie];
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.INVITE;
                    if(!(option !== zuuluu)) { _fun00008_ip = 722; continue _fun00007 }
 63:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.TEMPLATE;
                    if(!(option !== zuuluu)) { _fun00008_ip = 673; continue _fun00007 }
 99:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.BUILD_OVERRIDE;
                    if(!(option !== zuuluu)) { _fun00008_ip = 769; continue _fun00007 }
 135:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.MANUAL_BUILD_OVERRIDE;
                    if(!(option !== zuuluu)) { _fun00008_ip = 769; continue _fun00007 }
 171:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.EVENT;
                    if(!(option !== zuuluu)) { _fun00008_ip = 769; continue _fun00007 }
 207:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.CHANNEL_LINK;
                    if(!(option !== zuuluu)) { _fun00008_ip = 769; continue _fun00007 }
 243:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.APP_DIRECTORY_PROFILE;
                    if(!(option !== zuuluu)) { _fun00008_ip = 640; continue _fun00007 }
 279:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.ACTIVITY_BOOKMARK;
                    if(!(option !== zuuluu)) { _fun00008_ip = 769; continue _fun00007 }
 315:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.EMBEDDED_ACTIVITY_INVITE;
                    if(!(option !== zuuluu)) { _fun00008_ip = 769; continue _fun00007 }
 351:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.GUILD_PRODUCT;
                    if(!(option !== zuuluu)) { _fun00008_ip = 769; continue _fun00007 }
 387:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.SERVER_SHOP;
                    if(!(option !== zuuluu)) { _fun00008_ip = 769; continue _fun00007 }
 423:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.QUESTS_EMBED;
                    if(!(option !== zuuluu)) { _fun00008_ip = 769; continue _fun00007 }
 459:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.APP_DIRECTORY_STOREFRONT;
                    if(!(option !== zuuluu)) { _fun00008_ip = 769; continue _fun00007 }
 495:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.APP_DIRECTORY_STOREFRONT_SKU;
                    if(!(option !== zuuluu)) { _fun00008_ip = 769; continue _fun00007 }
 531:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.APP_OAUTH2_LINK;
                    if(!(option !== zuuluu)) { _fun00008_ip = 769; continue _fun00007 }
 567:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[golfie];
                    zuuluu = tangon.bind(entity)(zuuluu);
                    zuuluu = zuuluu.CodedLinkType;
                    zuuluu = zuuluu.COLLECTIBLES_SHOP;
                    if(!(option !== zuuluu)) { _fun00008_ip = 769; continue _fun00007 }
 603:
                    zuuluu = global;
                    tangon = zuuluu.Error;
                    zuuluu = zuuluu.HermesInternal;
                    golfie = zuuluu.concat;
                    zuuluu = 'Unknown coded link type: ';
                    zuuluu = golfie.bind(zuuluu)(option);
                    zuuluu = tangon.bind(entity)(zuuluu);
                    throw zuuluu;
 640:
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 14;
                    zuuluu = golfie[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.getEmbedApplication;
                    zuuluu = zuuluu.bind(tangon)(oscard);
                    _fun00008_ip = 769; continue _fun00007;
 673:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = oscard[zuuluu];
                    oscard = tangon.bind(entity)(zuuluu);
                    tangon = oscard.queueMessageLinkFetch;
                    golfie = _closure1_slot8;
                    zuuluu = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00010_ip = 93; continue _fun00009 }
 7:
                                oscard = _closure1_slot9;
                                report = oscard.getGuildTemplate;
                                tangon = _closure3_slot0;
                                report = report.bind(oscard)(tangon);
                                tangon = null;
                                if(!(tangon == report)) { _fun00010_ip = 85; continue _fun00009 }
 38:
                                report = _closure1_slot1;
                                tangon = _closure1_slot2;
                                zuuluu = 13;
                                tangon = tangon[zuuluu];
                                zuuluu = undefined;
                                tangon = report.bind(zuuluu)(tangon);
                                zuuluu = tangon.resolveGuildTemplate;
                                michal = _closure3_slot0;
                                michal = zuuluu.bind(tangon)(michal);
                                SaveGenerator(address=79);
 77:
                                return michal;
 79:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(zuuluu) { _fun00010_ip = 90; continue _fun00009 }
 85:
                                zuuluu = undefined;
                                return zuuluu;
 90:
                                return michal;
 93:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    zuuluu = golfie.bind(entity)(zuuluu);
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    _fun00008_ip = 769; continue _fun00007;
 722:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 10;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.queueMessageLinkFetch;
                    report = _closure1_slot8;
                    michal = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00012_ip = 145; continue _fun00011 }
 10:
                                oscard = _closure1_slot10;
                                report = oscard.getInvite;
                                tangon = _closure3_slot0;
                                report = report.bind(oscard)(tangon);
                                tangon = null;
                                if(!(tangon == report)) { _fun00012_ip = 137; continue _fun00011 }
 41:
                                report = _closure1_slot1;
                                oscard = _closure1_slot2;
                                michal = 11;
                                michal = oscard[michal];
                                tangon = undefined;
                                option = report.bind(tangon)(michal);
                                golfie = option.dispatch;
                                michal = {};
                                verify = 'INVITE_RESOLVE';
                                michal['type'] = verify;
                                zuuluu = _closure3_slot0;
                                michal['code'] = zuuluu;
                                michal = golfie.bind(option)(michal);
                                michal = 12;
                                michal = oscard[michal];
                                michal = report.bind(tangon)(michal);
                                tangon = michal.bind(tangon)(zuuluu);
                                zuuluu = tangon.then;
                                michal = function(argFoo) {
                                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                        entity = argFoo;
                                        report = entity.invite;
                                        tangon = entity.code;
                                        oscard = entity.banned;
                                        entity = null;
                                        if(!(entity == report)) { _fun00014_ip = 84; continue _fun00013 }
 26:
                                        zuuluu = _closure1_slot1;
                                        michal = _closure1_slot2;
                                        entity = 11;
                                        michal = michal[entity];
                                        entity = undefined;
                                        zuuluu = zuuluu.bind(entity)(michal);
                                        michal = zuuluu.dispatch;
                                        entity = {};
                                        golfie = 'INVITE_RESOLVE_FAILURE';
                                        entity['type'] = golfie;
                                        entity['code'] = tangon;
                                        entity['banned'] = oscard;
                                        entity = michal.bind(zuuluu)(entity);
                                        _fun00014_ip = 138; continue _fun00013;
 84:
                                        zuuluu = _closure1_slot1;
                                        michal = _closure1_slot2;
                                        entity = 11;
                                        michal = michal[entity];
                                        entity = undefined;
                                        zuuluu = zuuluu.bind(entity)(michal);
                                        michal = zuuluu.dispatch;
                                        entity = {};
                                        oscard = 'INVITE_RESOLVE_SUCCESS';
                                        entity['type'] = oscard;
                                        entity['invite'] = report;
                                        entity['code'] = tangon;
                                        entity = michal.bind(zuuluu)(entity);
 138:
                                        entity = undefined;
                                        return entity;
                                    }
                                };
                                michal = zuuluu.bind(tangon)(michal);
                                SaveGenerator(address=131);
 129:
                                return michal;
 131:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(zuuluu) { _fun00012_ip = 142; continue _fun00011 }
 137:
                                zuuluu = undefined;
                                return zuuluu;
 142:
                                return michal;
 145:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    michal = report.bind(entity)(michal);
                    michal = zuuluu.bind(tangon)(michal);
 769:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
 80:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    tangon = 16;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function() { // Original name: MessageCodedLinkManager
            report = this;
            entity = _closure1_slot4;
            zuuluu = _closure2_slot0;
            tangon = undefined;
            entity = entity.bind(tangon)(report, zuuluu);
            entity = _closure1_slot11;
            entity = entity.bind(tangon)(report, zuuluu);
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 15;
            zuuluu = oscard[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            michal = _closure1_slot13;
            michal = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/coded_links/MessageCodedLinkManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();