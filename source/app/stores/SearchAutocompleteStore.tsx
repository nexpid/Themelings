// app/stores/SearchAutocompleteStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
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
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    entity = function(argFoo) { // Original name: stateFactory
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            offset = entity.searchId;
            verify = entity.query;
            oscard = entity.mode;
            tangon = entity.tokens;
            report = entity.cursorScope;
            michal = entity.autocompletes;
            entity = _closure1_slot20;
            entity = entity[offset];
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00004_ip = 125; continue _fun00003 }
 54:
            golfie = {};
            entity = new Array(0);
            golfie['results'] = entity;
            romeon = _closure1_slot1;
            yankee = _closure1_slot2;
            entity = 14;
            yankee = yankee[entity];
            entity = undefined;
            romeon = romeon.bind(entity)(yankee);
            yankee = romeon.getSearchContext;
            foxtra = _closure1_slot25;
            entity = foxtra.bind;
            entity = entity.bind(foxtra)(zuuluu, offset);
            entity = yankee.bind(romeon)(entity);
            golfie['context'] = entity;
            entity = _closure1_slot20;
            entity[offset] = golfie;
 125:
            entity = {};
            offset = zuuluu != verify;
            golfie = '';
            if(!offset) { _fun00004_ip = 141; continue _fun00003 }
 138:
            golfie = verify;
 141:
            entity['query'] = golfie;
            if(!(zuuluu == oscard)) { _fun00004_ip = 182; continue _fun00003 }
 149:
            golfie = {'type': null, 'filter': null, 'token': null};
            option = _closure1_slot14;
            option = option.EMPTY;
            golfie['type'] = option;
            oscard = golfie;
 182:
            entity['mode'] = oscard;
            if(!(zuuluu == tangon)) { _fun00004_ip = 194; continue _fun00003 }
 190:
            tangon = new Array(0);
 194:
            entity['tokens'] = tangon;
            oscard = zuuluu != report;
            tangon = null;
            if(!oscard) { _fun00004_ip = 211; continue _fun00003 }
 208:
            tangon = report;
 211:
            entity['cursorScope'] = tangon;
            if(!(zuuluu == michal)) { _fun00004_ip = 224; continue _fun00003 }
 220:
            michal = new Array(0);
 224:
            entity['autocompletes'] = michal;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar) { // Original name: handleUserSearchResults
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = argBar;
            option = entity.results;
            michal = _closure1_slot20;
            report = michal[tangon];
            michal = _closure1_slot19;
            michal = michal[tangon];
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00006_ip = 277; continue _fun00005 }
 40:
            if(!(zuuluu != michal)) { _fun00006_ip = 277; continue _fun00005 }
 47:
            zuuluu = michal.mode;
            golfie = zuuluu.type;
            oscard = zuuluu.filter;
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.EMPTY;
            if(!(golfie !== zuuluu)) { _fun00006_ip = 277; continue _fun00005 }
 79:
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.FILTER;
            if(!(golfie === zuuluu)) { _fun00006_ip = 124; continue _fun00005 }
 93:
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.FILTER_FROM;
            if(!(oscard !== zuuluu)) { _fun00006_ip = 124; continue _fun00005 }
 107:
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.FILTER_MENTIONS;
            if(!(oscard === zuuluu)) { _fun00006_ip = 277; continue _fun00005 }
 124:
            zuuluu = michal.mode;
            oscard = zuuluu.type;
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.FILTER;
            golfie = 3;
            if(!(oscard === zuuluu)) { _fun00006_ip = 155; continue _fun00005 }
 151:
            golfie = _closure1_slot21;
 155:
            zuuluu = function(argFoo) { // Original name: fixUserResults
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = argFoo;
                    michal = arguments[1];
                    entity = undefined;
                    if(!(michal === entity)) { _fun00008_ip = 15; continue _fun00007 }
 12:
                    michal = 10;
 15:
                    tangon = report.reduce;
                    zuuluu = function(argFoo, argBar) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            entity = argFoo;
                            tangon = _closure1_slot13;
                            zuuluu = tangon.getUser;
                            michal = argBar;
                            michal = michal.id;
                            tangon = zuuluu.bind(tangon)(michal);
                            michal = null;
                            if(!(michal != tangon)) { _fun00010_ip = 97; continue _fun00009 }
 35:
                            zuuluu = entity.push;
                            michal = {};
                            oscard = tangon.id;
                            michal['id'] = oscard;
                            golfie = _closure1_slot1;
                            oscard = _closure1_slot2;
                            report = 15;
                            oscard = oscard[report];
                            report = undefined;
                            oscard = golfie.bind(report)(oscard);
                            report = oscard.getUserTag;
                            report = report.bind(oscard)(tangon);
                            michal['text'] = report;
                            michal['user'] = tangon;
                            michal = zuuluu.bind(entity)(michal);
 97:
                            return entity;
                        }
                    };
                    entity = new Array(0);
                    entity = tangon.bind(report)(zuuluu, entity);
                    zuuluu = entity.length;
                    if(!(zuuluu > michal)) { _fun00008_ip = 55; continue _fun00007 }
 49:
                    entity['length'] = michal;
 55:
                    return entity;
                }
            };
            oscard = undefined;
            zuuluu = zuuluu.bind(oscard)(option, golfie);
            report['results'] = zuuluu;
            yankee = michal.query;
            offset = michal.mode;
            verify = michal.tokens;
            option = michal.cursorScope;
            michal = michal.autocompletes;
            michal = _closure1_slot29;
            golfie = michal.bind(oscard)(tangon, offset);
            zuuluu = _closure1_slot19;
            report = _closure1_slot24;
            michal = {};
            michal['searchId'] = tangon;
            michal['query'] = yankee;
            michal['mode'] = offset;
            michal['tokens'] = verify;
            michal['cursorScope'] = option;
            michal['autocompletes'] = golfie;
            michal = report.bind(oscard)(michal);
            zuuluu[tangon] = michal;
            michal = _closure1_slot22;
            entity = michal.emitChange;
            entity = entity.bind(michal)();
 277:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: generateFilterResults
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            golfie = argBar;
            foxtra = argBaz;
            yankee = arguments[3];
            offset = undefined;
            if(!(yankee === offset)) { _fun00012_ip = 23; continue _fun00011 }
 20:
            yankee = 10;
 23:
            var _closure2_slot0 = offset;
            entity = null;
            if(!(entity != report)) { _fun00012_ip = 497; continue _fun00011 }
 36:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 12;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(offset)(zuuluu);
            zuuluu = tangon.getSearchType;
            oscard = zuuluu.bind(tangon)(foxtra);
            tangon = entity == golfie;
            zuuluu = undefined;
            if(tangon) { _fun00012_ip = 108; continue _fun00011 }
 79:
            tangon = golfie.getFullMatch;
            verify = tangon.bind(golfie)();
            tangon = entity == verify;
            zuuluu = undefined;
            if(tangon) { _fun00012_ip = 108; continue _fun00011 }
 98:
            tangon = verify.trim;
            zuuluu = tangon.bind(verify)();
 108:
            tangon = entity != zuuluu;
            verify = '';
            if(!tangon) { _fun00012_ip = 122; continue _fun00011 }
 119:
            verify = zuuluu;
 122:
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.FILTER_FROM;
            zuuluu = report === zuuluu;
            if(zuuluu) { _fun00012_ip = 153; continue _fun00011 }
 139:
            tangon = _closure1_slot16;
            tangon = tangon.FILTER_MENTIONS;
            zuuluu = report === tangon;
 153:
            tangon = _closure1_slot17;
            tangon = tangon.GUILD;
            if(!(oscard === tangon)) { _fun00012_ip = 170; continue _fun00011 }
 167:
            if(zuuluu) { _fun00012_ip = 236; continue _fun00011 }
 170:
            oscard = _closure1_slot1;
            romeon = _closure1_slot2;
            tangon = 18;
            tangon = romeon[tangon];
            tangon = oscard.bind(offset)(tangon);
            oscard = tangon[report];
            romeon = entity == oscard;
            tangon = undefined;
            if(romeon) { _fun00012_ip = 209; continue _fun00011 }
 203:
            tangon = oscard.getAutocompletions;
 209:
            if(!(entity == tangon)) { _fun00012_ip = 219; continue _fun00011 }
 213:
            oscard = new Array(0);
            _fun00012_ip = 234; continue _fun00011;
 219:
            if(!(entity == yankee)) { _fun00012_ip = 227; continue _fun00011 }
 223:
            yankee = _closure1_slot21;
 227:
            oscard = tangon.bind(offset)(verify, foxtra, yankee);
 234:
            _fun00012_ip = 339; continue _fun00011;
 236:
            tangon = _closure1_slot20;
            tangon = tangon[foxtra];
            yankee = entity == tangon;
            oscard = null;
            if(yankee) { _fun00012_ip = 339; continue _fun00011 }
 253:
            golfie = entity != golfie;
            if(!golfie) { _fun00012_ip = 271; continue _fun00011 }
 260:
            romeon = verify.length;
            yankee = 0;
            golfie = yankee !== romeon;
 271:
            if(golfie) { _fun00012_ip = 333; continue _fun00011 }
 274:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            golfie = 17;
            golfie = romeon[golfie];
            romeon = yankee.bind(offset)(golfie);
            yankee = romeon.getRecentlyTalked;
            golfie = _closure1_slot21;
            romeon = yankee.bind(romeon)(foxtra, golfie);
            yankee = romeon.map;
            golfie = function(argFoo) {
                entity = argFoo;
                tangon = entity.record;
                entity = {};
                entity['user'] = tangon;
                report = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 15;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                michal = zuuluu.getUserTag;
                michal = michal.bind(zuuluu)(tangon);
                entity['text'] = michal;
                return entity;
            };
            golfie = yankee.bind(romeon)(golfie);
            tangon['results'] = golfie;
 333:
            oscard = tangon.results;
 339:
            tangon = oscard;
            if(!(entity != tangon)) { _fun00012_ip = 458; continue _fun00011 }
 346:
            tangon = oscard;
            if(!zuuluu) { _fun00012_ip = 458; continue _fun00011 }
 352:
            golfie = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 18;
            zuuluu = yankee[zuuluu];
            golfie = golfie.bind(offset)(zuuluu);
            zuuluu = golfie.isMeAutcompleteAnswer;
            zuuluu = zuuluu.bind(golfie)(verify);
            tangon = oscard;
            if(!zuuluu) { _fun00012_ip = 458; continue _fun00011 }
 389:
            golfie = _closure1_slot13;
            zuuluu = golfie.getCurrentUser;
            golfie = zuuluu.bind(golfie)();
            _closure2_slot0 = golfie;
            tangon = oscard;
            if(!(entity != golfie)) { _fun00012_ip = 458; continue _fun00011 }
 413:
            zuuluu = oscard.filter;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.user;
                michal = entity.id;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal !== entity;
                return entity;
            };
            michal = zuuluu.bind(oscard)(michal);
            oscard = michal.unshift;
            zuuluu = {};
            option = _closure1_slot18;
            zuuluu['text'] = option;
            zuuluu['user'] = golfie;
            zuuluu = oscard.bind(michal)(zuuluu);
            tangon = michal;
 458:
            zuuluu = entity == tangon;
            michal = null;
            if(zuuluu) { _fun00012_ip = 495; continue _fun00011 }
 467:
            oscard = tangon.length;
            zuuluu = 0;
            michal = null;
            if(!(zuuluu !== oscard)) { _fun00012_ip = 495; continue _fun00011 }
 480:
            zuuluu = {};
            zuuluu['group'] = report;
            zuuluu['results'] = tangon;
            michal = zuuluu;
 495:
            return michal;
 497:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo, argBar) { // Original name: generateSearchOptions
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = argFoo;
            michal = null;
            michal = michal != tangon;
            zuuluu = '';
            if(!michal) { _fun00014_ip = 28; continue _fun00013 }
 18:
            michal = tangon.getFullMatch;
            zuuluu = michal.bind(tangon)();
 28:
            michal = zuuluu.trim;
            report = michal.bind(zuuluu)();
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 12;
            michal = golfie[michal];
            tangon = undefined;
            verify = oscard.bind(tangon)(michal);
            option = verify.getSearchType;
            michal = argBar;
            verify = option.bind(verify)(michal);
            michal = 13;
            michal = golfie[michal];
            option = oscard.bind(tangon)(michal);
            michal = option.isChannelFilterSupported;
            offset = michal.bind(option)(verify);
            michal = global;
            verify = michal.Map;
            michal = _closure1_slot16;
            michal = michal.FILTER_FROM;
            option = new Array(2);
            option[0] = michal;
            michal = _closure1_slot12;
            michal = michal.hidePersonalInformation;
            michal = !michal;
            option[1] = michal;
            michal = new Array(8);
            michal[0] = option;
            option = _closure1_slot16;
            yankee = option.FILTER_MENTIONS;
            option = new Array(2);
            option[0] = yankee;
            yankee = _closure1_slot12;
            yankee = yankee.hidePersonalInformation;
            yankee = !yankee;
            option[1] = yankee;
            michal[1] = option;
            option = _closure1_slot16;
            yankee = option.FILTER_HAS;
            option = new Array(2);
            option[0] = yankee;
            yankee = true;
            option[1] = yankee;
            michal[2] = option;
            option = _closure1_slot16;
            romeon = option.FILTER_BEFORE;
            option = new Array(2);
            option[0] = romeon;
            option[1] = yankee;
            michal[3] = option;
            option = _closure1_slot16;
            romeon = option.FILTER_AFTER;
            option = new Array(2);
            option[0] = romeon;
            option[1] = yankee;
            michal[4] = option;
            option = _closure1_slot16;
            romeon = option.FILTER_ON;
            option = new Array(2);
            option[0] = romeon;
            option[1] = yankee;
            michal[5] = option;
            option = _closure1_slot16;
            yankee = option.FILTER_IN;
            option = new Array(2);
            option[0] = yankee;
            option[1] = offset;
            michal[6] = option;
            option = _closure1_slot16;
            offset = option.FILTER_PINNED;
            option = new Array(2);
            option[0] = offset;
            offset = false;
            option[1] = offset;
            michal[7] = option;
            option = verify.prototype;
            option = Object.create(option, {constructor: {value: verify}});
            backup = option;
            foxtra = michal;
            michal = new backup[verify](foxtra, romeon);
            michal = michal instanceof Object ? michal : option;
            var _closure2_slot0 = michal;
            michal = 18;
            michal = golfie[michal];
            tangon = oscard.bind(tangon)(michal);
            michal = tangon.getFilterAutocompletions;
            tangon = michal.bind(tangon)(report);
            michal = tangon.filter;
            entity = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.token;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00016_ip = 47; continue _fun00015 }
 18:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.get;
                    michal = michal.token;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = true;
                    entity = michal === zuuluu;
 47:
                    return entity;
                }
            };
            michal = michal.bind(tangon)(entity);
            entity = {};
            zuuluu = _closure1_slot15;
            zuuluu = zuuluu.SEARCH_OPTIONS;
            entity['group'] = zuuluu;
            entity['results'] = michal;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    entity = function(argFoo, argBar) { // Original name: generateGlobalResults
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = report;
            tangon = null;
            entity = tangon != oscard;
            golfie = '';
            zuuluu = golfie;
            if(!entity) { _fun00018_ip = 42; continue _fun00017 }
 32:
            entity = oscard.getFullMatch;
            zuuluu = entity.bind(oscard)();
 42:
            entity = zuuluu.trim;
            option = entity.bind(zuuluu)();
            entity = new Array(0);
            var _closure2_slot2 = entity;
            zuuluu = tangon != option;
            if(!zuuluu) { _fun00018_ip = 71; continue _fun00017 }
 67:
            zuuluu = golfie !== option;
 71:
            if(!zuuluu) { _fun00018_ip = 558; continue _fun00017 }
 77:
            offset = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 12;
            zuuluu = verify[zuuluu];
            verify = undefined;
            offset = offset.bind(verify)(zuuluu);
            zuuluu = offset.getSearchType;
            romeon = zuuluu.bind(offset)(report);
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.FILTER_HAS;
            offset = new Array(1);
            offset[0] = zuuluu;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.hidePersonalInformation;
            if(zuuluu) { _fun00018_ip = 184; continue _fun00017 }
 144:
            yankee = offset.push;
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.FILTER_FROM;
            zuuluu = yankee.bind(offset)(zuuluu);
            yankee = offset.push;
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.FILTER_MENTIONS;
            zuuluu = yankee.bind(offset)(zuuluu);
 184:
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            zuuluu = 13;
            zuuluu = foxtra[zuuluu];
            yankee = yankee.bind(verify)(zuuluu);
            zuuluu = yankee.isChannelFilterSupported;
            zuuluu = zuuluu.bind(yankee)(romeon);
            if(!zuuluu) { _fun00018_ip = 238; continue _fun00017 }
 218:
            yankee = offset.push;
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.FILTER_IN;
            zuuluu = yankee.bind(offset)(zuuluu);
 238:
            zuuluu = offset.forEach;
            michal = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    option = argFoo;
                    michal = null;
                    if(!(michal != option)) { _fun00020_ip = 57; continue _fun00019 }
 9:
                    golfie = _closure1_slot26;
                    yankee = _closure2_slot0;
                    offset = _closure2_slot1;
                    foxtra = undefined;
                    verify = 3;
                    romeon = option;
                    zuuluu = foxtra[golfie](romeon, yankee, offset, verify, option);
                    if(!(michal != zuuluu)) { _fun00020_ip = 57; continue _fun00019 }
 43:
                    michal = _closure2_slot2;
                    entity = michal.push;
                    entity = entity.bind(michal)(zuuluu);
 57:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(offset)(michal);
            zuuluu = entity.push;
            michal = tangon != oscard;
            offset = golfie;
            if(!michal) { _fun00018_ip = 280; continue _fun00017 }
 270:
            michal = oscard.getFullMatch;
            offset = michal.bind(oscard)();
 280:
            michal = offset.trim;
            backup = michal.bind(offset)();
            offset = tangon != backup;
            michal = undefined;
            if(!offset) { _fun00018_ip = 553; continue _fun00017 }
 302:
            michal = undefined;
            if(!(golfie !== backup)) { _fun00018_ip = 553; continue _fun00017 }
 311:
            offset = _closure1_slot1;
            golfie = _closure1_slot2;
            foxtra = 18;
            golfie = golfie[foxtra];
            offset = offset.bind(verify)(golfie);
            golfie = _closure1_slot16;
            golfie = golfie.FILTER_BEFORE;
            romeon = offset[golfie];
            golfie = tangon == romeon;
            yankee = undefined;
            if(golfie) { _fun00018_ip = 376; continue _fun00017 }
 354:
            offset = romeon.getAutocompletions;
            golfie = 1;
            offset = offset.bind(romeon)(backup, report, golfie);
            golfie = 0;
            yankee = offset[golfie];
 376:
            offset = _closure1_slot1;
            golfie = _closure1_slot2;
            golfie = golfie[foxtra];
            offset = offset.bind(verify)(golfie);
            golfie = _closure1_slot16;
            golfie = golfie.FILTER_ON;
            kiloes = offset[golfie];
            golfie = tangon == kiloes;
            offset = undefined;
            if(golfie) { _fun00018_ip = 438; continue _fun00017 }
 416:
            romeon = kiloes.getAutocompletions;
            golfie = 1;
            romeon = romeon.bind(kiloes)(backup, report, golfie);
            golfie = 0;
            offset = romeon[golfie];
 438:
            romeon = _closure1_slot1;
            golfie = _closure1_slot2;
            golfie = golfie[foxtra];
            romeon = romeon.bind(verify)(golfie);
            golfie = _closure1_slot16;
            golfie = golfie.FILTER_AFTER;
            foxtra = romeon[golfie];
            golfie = tangon == foxtra;
            verify = undefined;
            if(golfie) { _fun00018_ip = 500; continue _fun00017 }
 478:
            romeon = foxtra.getAutocompletions;
            golfie = 1;
            romeon = romeon.bind(foxtra)(backup, report, golfie);
            golfie = 0;
            verify = romeon[golfie];
 500:
            golfie = tangon == yankee;
            tangon = null;
            if(golfie) { _fun00018_ip = 550; continue _fun00017 }
 509:
            golfie = {};
            option = _closure1_slot15;
            option = option.DATES;
            golfie['group'] = option;
            option = new Array(3);
            option[0] = yankee;
            option[1] = offset;
            option[2] = verify;
            golfie['results'] = option;
            tangon = golfie;
 550:
            michal = tangon;
 553:
            michal = zuuluu.bind(entity)(michal);
 558:
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 13;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            golfie = golfie.bind(tangon)(zuuluu);
            zuuluu = golfie.getTotalResults;
            golfie = zuuluu.bind(golfie)(entity);
            zuuluu = 5;
            if(!(golfie < zuuluu)) { _fun00018_ip = 621; continue _fun00017 }
 601:
            zuuluu = entity.push;
            michal = _closure1_slot27;
            michal = michal.bind(tangon)(oscard, report);
            michal = zuuluu.bind(entity)(michal);
 621:
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function(argFoo, argBar) { // Original name: getAutocompleteList
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            verify = argFoo;
            report = argBar;
            michal = new Array(0);
            tangon = report.type;
            entity = _closure1_slot14;
            entity = entity.FILTER;
            if(!(tangon !== entity)) { _fun00022_ip = 126; continue _fun00021 }
 32:
            tangon = report.type;
            entity = _closure1_slot14;
            entity = entity.FILTER_ALL;
            if(!(tangon !== entity)) { _fun00022_ip = 106; continue _fun00021 }
 51:
            oscard = report.type;
            entity = _closure1_slot14;
            tangon = entity.EMPTY;
            entity = michal;
            if(!(oscard === tangon)) { _fun00022_ip = 167; continue _fun00021 }
 73:
            oscard = michal.push;
            option = _closure1_slot27;
            golfie = report.token;
            tangon = undefined;
            tangon = option.bind(tangon)(golfie, verify);
            tangon = oscard.bind(michal)(tangon);
            entity = michal;
            _fun00022_ip = 167; continue _fun00021;
 106:
            golfie = _closure1_slot28;
            oscard = report.token;
            tangon = undefined;
            entity = golfie.bind(tangon)(oscard, verify);
            _fun00022_ip = 167; continue _fun00021;
 126:
            tangon = michal.push;
            option = _closure1_slot26;
            foxtra = report.filter;
            romeon = report.token;
            offset = _closure1_slot21;
            backup = undefined;
            yankee = verify;
            zuuluu = backup[option](foxtra, romeon, yankee, offset, verify);
            zuuluu = tangon.bind(michal)(zuuluu);
            entity = michal;
 167:
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    offset = function() { // Original name: handleChannelChange
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 13;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.clearTokenCache;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    entity = function(argFoo) { // Original name: removeHistoryFromResults
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            zuuluu = argFoo;
            entity = _closure1_slot19;
            michal = entity[zuuluu];
            entity = null;
            if(!(entity != michal)) { _fun00024_ip = 116; continue _fun00023 }
 20:
            verify = michal.query;
            option = michal.mode;
            oscard = michal.tokens;
            entity = michal.cursorScope;
            golfie = michal.autocompletes;
            michal = _closure1_slot19;
            report = _closure1_slot24;
            tangon = {};
            tangon['searchId'] = zuuluu;
            tangon['query'] = verify;
            tangon['mode'] = option;
            tangon['tokens'] = oscard;
            tangon['cursorScope'] = entity;
            oscard = golfie.map;
            entity = function(argFoo) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    michal = argFoo;
                    entity = null;
                    zuuluu = entity == michal;
                    tangon = undefined;
                    if(zuuluu) { _fun00026_ip = 20; continue _fun00025 }
 14:
                    tangon = michal.group;
 20:
                    zuuluu = _closure1_slot15;
                    zuuluu = zuuluu.HISTORY;
                    entity = null;
                    if(!(tangon !== zuuluu)) { _fun00026_ip = 42; continue _fun00025 }
 39:
                    entity = michal;
 42:
                    return entity;
                }
            };
            entity = oscard.bind(golfie)(entity);
            tangon['autocompletes'] = entity;
            entity = undefined;
            entity = report.bind(entity)(tangon);
            michal[zuuluu] = entity;
 116:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    golfie = function() { // Original name: handleMiscActions
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            zuuluu = _closure1_slot11;
            michal = zuuluu.getCurrentSearchId;
            zuuluu = michal.bind(zuuluu)();
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00028_ip = 124; continue _fun00027 }
 23:
            michal = _closure1_slot19;
            michal = michal[zuuluu];
            if(!(tangon != michal)) { _fun00028_ip = 124; continue _fun00027 }
 35:
            michal = _closure1_slot19;
            michal = michal[zuuluu];
            verify = michal.query;
            golfie = michal.mode;
            option = michal.tokens;
            oscard = michal.cursorScope;
            michal = _closure1_slot19;
            report = _closure1_slot24;
            tangon = {};
            tangon['searchId'] = zuuluu;
            tangon['query'] = verify;
            tangon['mode'] = golfie;
            tangon['tokens'] = option;
            tangon['cursorScope'] = oscard;
            oscard = _closure1_slot29;
            entity = undefined;
            oscard = oscard.bind(entity)(zuuluu, golfie);
            tangon['autocompletes'] = oscard;
            entity = report.bind(entity)(tangon);
            michal[zuuluu] = entity;
 124:
            entity = undefined;
            return entity;
        }
    };
    entity = global;
    yankee = entity.Object;
    verify = yankee.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(yankee)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot11 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot12 = michal;
    michal = 10;
    verify = oscard[michal];
    verify = option.bind(entity)(verify);
    var _closure1_slot13 = verify;
    verify = 11;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    yankee = verify.SearchPopoutModes;
    var _closure1_slot14 = yankee;
    yankee = verify.SearchAutocompleteGroups;
    var _closure1_slot15 = yankee;
    yankee = verify.SearchTokenTypes;
    var _closure1_slot16 = yankee;
    yankee = verify.SearchTypes;
    var _closure1_slot17 = yankee;
    verify = verify.ME;
    var _closure1_slot18 = verify;
    verify = {};
    var _closure1_slot19 = verify;
    verify = {};
    var _closure1_slot20 = verify;
    var _closure1_slot21 = michal;
    michal = 19;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    verify = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: SearchAutocompleteStoreClass
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot23;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00030_ip = 69; continue _fun00029 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00030_ip = 105; continue _fun00029;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
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
        entity = function() { // Original name: value
            oscard = this;
            report = oscard.waitFor;
            offset = _closure1_slot9;
            verify = _closure1_slot12;
            option = _closure1_slot8;
            golfie = _closure1_slot10;
            yankee = oscard;
            entity = yankee[report](offset, verify, option, golfie, oscard);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                michal = argFoo;
                entity = _closure1_slot19;
                entity = entity[michal];
                tangon = null;
                if(!(tangon == entity)) { _fun00032_ip = 38; continue _fun00031 }
 20:
                tangon = _closure1_slot24;
                zuuluu = {};
                zuuluu['searchId'] = michal;
                michal = undefined;
                entity = tangon.bind(michal)(zuuluu);
 38:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = michal.bind(entity)(verify);
    michal = 'SearchAutocompleteStore';
    verify['displayName'] = michal;
    michal = 20;
    michal = oscard[michal];
    backup = option.bind(entity)(michal);
    michal = {};
    yankee = function(argFoo) { // Original name: handleQueryUpdate
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            tangon = entity.searchId;
            verify = entity.tokens;
            option = entity.cursorScope;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 13;
            golfie = report[entity];
            oscard = undefined;
            offset = zuuluu.bind(oscard)(golfie);
            golfie = offset.getQueryFromTokens;
            yankee = golfie.bind(offset)(verify);
            entity = report[entity];
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.getAutocompleteMode;
            offset = entity.bind(zuuluu)(option, verify);
            entity = _closure1_slot19;
            romeon = entity[tangon];
            zuuluu = null;
            if(!(zuuluu == romeon)) { _fun00034_ip = 94; continue _fun00033 }
 92:
            romeon = {};
 94:
            entity = _closure1_slot20;
            report = entity[tangon];
            entity = romeon.query;
            if(!(yankee === entity)) { _fun00034_ip = 152; continue _fun00033 }
 111:
            entity = romeon.mode;
            if(!(zuuluu != entity)) { _fun00034_ip = 139; continue _fun00033 }
 120:
            entity = romeon.mode;
            golfie = entity.filter;
            entity = offset.filter;
            if(!(golfie === entity)) { _fun00034_ip = 152; continue _fun00033 }
 139:
            golfie = romeon.autocompletes;
            entity = false;
            _fun00034_ip = 482; continue _fun00033;
 152:
            backup = offset.type;
            foxtra = _closure1_slot14;
            foxtra = foxtra.EMPTY;
            if(!(backup !== foxtra)) { _fun00034_ip = 441; continue _fun00033 }
 174:
            backup = offset.type;
            foxtra = _closure1_slot14;
            foxtra = foxtra.FILTER;
            if(!(backup === foxtra)) { _fun00034_ip = 234; continue _fun00033 }
 193:
            backup = offset.filter;
            foxtra = _closure1_slot16;
            foxtra = foxtra.FILTER_FROM;
            if(!(backup !== foxtra)) { _fun00034_ip = 234; continue _fun00033 }
 212:
            backup = offset.filter;
            foxtra = _closure1_slot16;
            foxtra = foxtra.FILTER_MENTIONS;
            if(!(backup === foxtra)) { _fun00034_ip = 441; continue _fun00033 }
 234:
            backup = zuuluu != report;
            golfie = undefined;
            entity = true;
            if(!backup) { _fun00034_ip = 482; continue _fun00033 }
 248:
            output = offset.token;
            if(!(zuuluu != output)) { _fun00034_ip = 289; continue _fun00033 }
 258:
            backup = output.getFullMatch;
            kiloes = backup.bind(output)();
            backup = kiloes.trim;
            backup = backup.bind(kiloes)();
            kiloes = backup.length;
            backup = 0;
            if(!(!(kiloes > backup))) { _fun00034_ip = 321; continue _fun00033 }
 289:
            kiloes = report.context;
            backup = kiloes.clearQuery;
            backup = backup.bind(kiloes)();
            backup = _closure1_slot29;
            golfie = backup.bind(oscard)(tangon, offset);
            entity = true;
            _fun00034_ip = 482; continue _fun00033;
 321:
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            foxtra = 16;
            foxtra = kiloes[foxtra];
            sizing = backup.bind(oscard)(foxtra);
            kiloes = sizing.requestMembers;
            foxtra = output.getFullMatch;
            backup = foxtra.bind(output)();
            foxtra = backup.trim;
            backup = foxtra.bind(backup)();
            foxtra = _closure1_slot21;
            foxtra = kiloes.bind(sizing)(tangon, backup, foxtra);
            kiloes = report.context;
            backup = kiloes.setQuery;
            foxtra = {};
            sizing = output.getFullMatch;
            output = sizing.bind(output)();
            sizing = output.trim;
            sizing = sizing.bind(output)();
            foxtra['query'] = sizing;
            sizing = {};
            sizing['guild'] = tangon;
            foxtra['filters'] = sizing;
            foxtra = backup.bind(kiloes)(foxtra);
            golfie = romeon.autocompletes;
            entity = false;
            _fun00034_ip = 482; continue _fun00033;
 441:
            if(!(zuuluu != report)) { _fun00034_ip = 470; continue _fun00033 }
 445:
            romeon = report.context;
            zuuluu = romeon.clearQuery;
            zuuluu = zuuluu.bind(romeon)();
            zuuluu = new Array(0);
            report['results'] = zuuluu;
 470:
            zuuluu = _closure1_slot29;
            golfie = zuuluu.bind(oscard)(tangon, offset);
            entity = true;
 482:
            zuuluu = _closure1_slot19;
            report = _closure1_slot24;
            michal = {};
            michal['searchId'] = tangon;
            michal['query'] = yankee;
            michal['mode'] = offset;
            michal['tokens'] = verify;
            michal['cursorScope'] = option;
            michal['autocompletes'] = golfie;
            michal = report.bind(oscard)(michal);
            zuuluu[tangon] = michal;
            return entity;
        }
    };
    michal['SEARCH_AUTOCOMPLETE_QUERY_UPDATE'] = yankee;
    yankee = function(argFoo) { // Original name: clearSearchState
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            michal = entity.searchId;
            zuuluu = _closure1_slot20;
            tangon = zuuluu[michal];
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00036_ip = 59; continue _fun00035 }
 26:
            report = tangon.context;
            zuuluu = report.destroy;
            zuuluu = zuuluu.bind(report)();
            zuuluu = new Array(0);
            tangon['results'] = zuuluu;
            zuuluu = _closure1_slot20;
            zuuluu = delete zuuluu[michal];
 59:
            entity = _closure1_slot19;
            entity = delete entity[michal];
            entity = undefined;
            return entity;
        }
    };
    michal['SEARCH_EDITOR_STATE_CLEAR'] = yankee;
    michal['CHANNEL_CREATE'] = offset;
    michal['CHANNEL_DELETE'] = offset;
    michal['STREAMER_MODE_UPDATE'] = golfie;
    michal['SEARCH_SCREEN_OPEN'] = golfie;
    golfie = function(argFoo) { // Original name: handleClearHistory
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.searchId;
            entity = null;
            if(!(entity == zuuluu)) { _fun00038_ip = 56; continue _fun00037 }
 15:
            entity = global;
            report = entity.Object;
            tangon = report.keys;
            michal = _closure1_slot19;
            tangon = tangon.bind(report)(michal);
            michal = tangon.forEach;
            entity = _closure1_slot30;
            entity = michal.bind(tangon)(entity);
            _fun00038_ip = 70; continue _fun00037;
 56:
            michal = _closure1_slot30;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
 70:
            entity = undefined;
            return entity;
        }
    };
    michal['SEARCH_CLEAR_HISTORY'] = golfie;
    golfie = function() { // Original name: handleLogOut
        entity = global;
        tangon = entity.Object;
        zuuluu = tangon.keys;
        michal = _closure1_slot19;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.forEach;
        entity = _closure1_slot30;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['LOGOUT'] = golfie;
    golfie = verify.prototype;
    golfie = Object.create(golfie, {constructor: {value: verify}});
    kiloes = golfie;
    foxtra = michal;
    michal = new kiloes[verify](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot22 = michal;
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/SearchAutocompleteStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();