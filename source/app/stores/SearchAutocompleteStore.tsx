// app/stores/SearchAutocompleteStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
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
            entity = _closure1_slot23;
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
    var _closure1_slot22 = entity;
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
            _closure1_slot23 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: stateFactory
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            offset = entity.searchId;
            verify = entity.query;
            oscard = entity.mode;
            tangon = entity.tokens;
            report = entity.cursorScope;
            michal = entity.autocompletes;
            entity = _closure1_slot18;
            entity = entity[offset];
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00006_ip = 125; continue _fun00005 }
 54:
            golfie = {};
            entity = new Array(0);
            golfie['results'] = entity;
            romeon = _closure1_slot1;
            yankee = _closure1_slot2;
            entity = 10;
            yankee = yankee[entity];
            entity = undefined;
            romeon = romeon.bind(entity)(yankee);
            yankee = romeon.getSearchContext;
            foxtra = _closure1_slot25;
            entity = foxtra.bind;
            entity = entity.bind(foxtra)(zuuluu, offset);
            entity = yankee.bind(romeon)(entity);
            golfie['context'] = entity;
            entity = _closure1_slot18;
            entity[offset] = golfie;
 125:
            entity = {};
            offset = zuuluu != verify;
            golfie = '';
            if(!offset) { _fun00006_ip = 141; continue _fun00005 }
 138:
            golfie = verify;
 141:
            entity['query'] = golfie;
            if(!(zuuluu == oscard)) { _fun00006_ip = 178; continue _fun00005 }
 149:
            golfie = {'type': null, 'filter': null, 'token': null};
            option = _closure1_slot12;
            option = option.EMPTY;
            golfie['type'] = option;
            oscard = golfie;
 178:
            entity['mode'] = oscard;
            if(!(zuuluu == tangon)) { _fun00006_ip = 190; continue _fun00005 }
 186:
            tangon = new Array(0);
 190:
            entity['tokens'] = tangon;
            oscard = zuuluu != report;
            tangon = null;
            if(!oscard) { _fun00006_ip = 207; continue _fun00005 }
 204:
            tangon = report;
 207:
            entity['cursorScope'] = tangon;
            if(!(zuuluu == michal)) { _fun00006_ip = 220; continue _fun00005 }
 216:
            michal = new Array(0);
 220:
            entity['autocompletes'] = michal;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = function(argFoo, argBar) { // Original name: handleUserSearchResults
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            entity = argBar;
            option = entity.results;
            michal = _closure1_slot18;
            report = michal[tangon];
            michal = _closure1_slot17;
            michal = michal[tangon];
            zuuluu = null;
            if(!(zuuluu != report)) { _fun00008_ip = 278; continue _fun00007 }
 40:
            if(!(zuuluu != michal)) { _fun00008_ip = 278; continue _fun00007 }
 47:
            zuuluu = michal.mode;
            golfie = zuuluu.type;
            oscard = zuuluu.filter;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.EMPTY;
            if(!(golfie !== zuuluu)) { _fun00008_ip = 278; continue _fun00007 }
 79:
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.FILTER;
            if(!(golfie === zuuluu)) { _fun00008_ip = 124; continue _fun00007 }
 93:
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.FILTER_FROM;
            if(!(oscard !== zuuluu)) { _fun00008_ip = 124; continue _fun00007 }
 107:
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.FILTER_MENTIONS;
            if(!(oscard === zuuluu)) { _fun00008_ip = 278; continue _fun00007 }
 124:
            golfie = _closure1_slot20;
            zuuluu = michal.mode;
            oscard = zuuluu.type;
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.FILTER;
            if(!(oscard === zuuluu)) { _fun00008_ip = 156; continue _fun00007 }
 152:
            golfie = _closure1_slot19;
 156:
            zuuluu = function(argFoo) { // Original name: fixUserResults
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = argFoo;
                    michal = arguments[1];
                    entity = undefined;
                    if(!(michal === entity)) { _fun00010_ip = 19; continue _fun00009 }
 12:
                    michal = _closure1_slot19;
 19:
                    tangon = report.reduce;
                    zuuluu = function(argFoo, argBar) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            entity = argFoo;
                            tangon = _closure1_slot11;
                            zuuluu = tangon.getUser;
                            michal = argBar;
                            michal = michal.id;
                            tangon = zuuluu.bind(tangon)(michal);
                            michal = null;
                            if(!(michal != tangon)) { _fun00012_ip = 97; continue _fun00011 }
 35:
                            zuuluu = entity.push;
                            michal = {};
                            oscard = tangon.id;
                            michal['id'] = oscard;
                            golfie = _closure1_slot1;
                            oscard = _closure1_slot2;
                            report = 11;
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
                    if(!(zuuluu > michal)) { _fun00010_ip = 59; continue _fun00009 }
 53:
                    entity['length'] = michal;
 59:
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
            zuuluu = _closure1_slot17;
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
            michal = _closure1_slot21;
            entity = michal.emitChange;
            entity = entity.bind(michal)();
 278:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: generateFilterResults
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            verify = argBar;
            backup = argBaz;
            offset = arguments[3];
            romeon = undefined;
            if(!(offset === romeon)) { _fun00014_ip = 27; continue _fun00013 }
 20:
            offset = _closure1_slot19;
 27:
            var _closure2_slot0 = romeon;
            entity = null;
            if(!(entity != report)) { _fun00014_ip = 620; continue _fun00013 }
 40:
            yankee = '';
            if(!(yankee !== report)) { _fun00014_ip = 620; continue _fun00013 }
 51:
            tangon = _closure1_slot9;
            zuuluu = tangon.getSearchType;
            oscard = zuuluu.bind(tangon)(backup);
            zuuluu = entity == verify;
            tangon = undefined;
            if(zuuluu) { _fun00014_ip = 107; continue _fun00013 }
 78:
            zuuluu = verify.getFullMatch;
            golfie = zuuluu.bind(verify)();
            zuuluu = entity == golfie;
            tangon = undefined;
            if(zuuluu) { _fun00014_ip = 107; continue _fun00013 }
 97:
            zuuluu = golfie.trim;
            tangon = zuuluu.bind(golfie)();
 107:
            golfie = entity != tangon;
            zuuluu = yankee;
            if(!golfie) { _fun00014_ip = 120; continue _fun00013 }
 117:
            zuuluu = tangon;
 120:
            tangon = _closure1_slot14;
            tangon = tangon.FILTER_FROM;
            golfie = report === tangon;
            if(golfie) { _fun00014_ip = 151; continue _fun00013 }
 137:
            tangon = _closure1_slot14;
            tangon = tangon.FILTER_MENTIONS;
            golfie = report === tangon;
 151:
            tangon = _closure1_slot15;
            tangon = tangon.GUILD;
            if(!(oscard === tangon)) { _fun00014_ip = 168; continue _fun00013 }
 165:
            if(golfie) { _fun00014_ip = 234; continue _fun00013 }
 168:
            oscard = _closure1_slot1;
            foxtra = _closure1_slot2;
            tangon = 15;
            tangon = foxtra[tangon];
            tangon = oscard.bind(romeon)(tangon);
            oscard = tangon[report];
            foxtra = entity == oscard;
            tangon = undefined;
            if(foxtra) { _fun00014_ip = 207; continue _fun00013 }
 201:
            tangon = oscard.getAutocompletions;
 207:
            if(!(entity == tangon)) { _fun00014_ip = 217; continue _fun00013 }
 211:
            oscard = new Array(0);
            _fun00014_ip = 232; continue _fun00013;
 217:
            if(!(entity == offset)) { _fun00014_ip = 225; continue _fun00013 }
 221:
            offset = _closure1_slot19;
 225:
            oscard = tangon.bind(romeon)(zuuluu, backup, offset);
 232:
            _fun00014_ip = 337; continue _fun00013;
 234:
            tangon = _closure1_slot18;
            tangon = tangon[backup];
            offset = entity == tangon;
            oscard = null;
            if(offset) { _fun00014_ip = 337; continue _fun00013 }
 251:
            verify = entity != verify;
            if(!verify) { _fun00014_ip = 269; continue _fun00013 }
 258:
            foxtra = zuuluu.length;
            offset = 0;
            verify = offset !== foxtra;
 269:
            if(verify) { _fun00014_ip = 331; continue _fun00013 }
 272:
            offset = _closure1_slot1;
            foxtra = _closure1_slot2;
            verify = 14;
            verify = foxtra[verify];
            foxtra = offset.bind(romeon)(verify);
            offset = foxtra.getRecentlyTalked;
            verify = _closure1_slot19;
            foxtra = offset.bind(foxtra)(backup, verify);
            offset = foxtra.map;
            verify = function(argFoo) {
                entity = argFoo;
                tangon = entity.record;
                entity = {};
                entity['user'] = tangon;
                report = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 11;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = report.bind(michal)(zuuluu);
                michal = zuuluu.getUserTag;
                michal = michal.bind(zuuluu)(tangon);
                entity['text'] = michal;
                return entity;
            };
            verify = offset.bind(foxtra)(verify);
            tangon['results'] = verify;
 331:
            oscard = tangon.results;
 337:
            tangon = zuuluu.toLowerCase;
            offset = tangon.bind(zuuluu)();
            verify = offset.replace;
            tangon = /^@/;
            verify = verify.bind(offset)(tangon, yankee);
            tangon = oscard;
            if(!(entity != tangon)) { _fun00014_ip = 581; continue _fun00013 }
 382:
            tangon = oscard;
            if(!golfie) { _fun00014_ip = 581; continue _fun00013 }
 391:
            golfie = zuuluu.length;
            zuuluu = 0;
            tangon = oscard;
            if(!(golfie > zuuluu)) { _fun00014_ip = 581; continue _fun00013 }
 408:
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            zuuluu = 16;
            golfie = foxtra[zuuluu];
            golfie = yankee.bind(romeon)(golfie);
            offset = golfie.intl;
            golfie = offset.string;
            zuuluu = foxtra[zuuluu];
            zuuluu = yankee.bind(romeon)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.Qf3ptr;
            golfie = golfie.bind(offset)(zuuluu);
            zuuluu = golfie.startsWith;
            zuuluu = zuuluu.bind(golfie)(verify);
            if(zuuluu) { _fun00014_ip = 512; continue _fun00013 }
 477:
            offset = _closure1_slot16;
            golfie = offset.substr;
            zuuluu = 1;
            golfie = golfie.bind(offset)(zuuluu);
            zuuluu = golfie.startsWith;
            zuuluu = zuuluu.bind(golfie)(verify);
            tangon = oscard;
            if(!zuuluu) { _fun00014_ip = 581; continue _fun00013 }
 512:
            golfie = _closure1_slot11;
            zuuluu = golfie.getCurrentUser;
            golfie = zuuluu.bind(golfie)();
            _closure2_slot0 = golfie;
            tangon = oscard;
            if(!(entity != golfie)) { _fun00014_ip = 581; continue _fun00013 }
 536:
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
            option = _closure1_slot16;
            zuuluu['text'] = option;
            zuuluu['user'] = golfie;
            zuuluu = oscard.bind(michal)(zuuluu);
            tangon = michal;
 581:
            zuuluu = entity == tangon;
            michal = null;
            if(zuuluu) { _fun00014_ip = 618; continue _fun00013 }
 590:
            oscard = tangon.length;
            zuuluu = 0;
            michal = null;
            if(!(zuuluu !== oscard)) { _fun00014_ip = 618; continue _fun00013 }
 603:
            zuuluu = {};
            zuuluu['group'] = report;
            zuuluu['results'] = tangon;
            michal = zuuluu;
 618:
            return michal;
 620:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo) { // Original name: generateSearchOptions
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            michal = null;
            michal = michal != tangon;
            zuuluu = '';
            if(!michal) { _fun00016_ip = 28; continue _fun00015 }
 18:
            michal = tangon.getFullMatch;
            zuuluu = michal.bind(tangon)();
 28:
            michal = zuuluu.trim;
            report = michal.bind(zuuluu)();
            michal = {};
            tangon = _closure1_slot14;
            oscard = tangon.FILTER_FROM;
            tangon = _closure1_slot10;
            tangon = tangon.hidePersonalInformation;
            tangon = !tangon;
            michal[oscard] = tangon;
            tangon = _closure1_slot14;
            oscard = tangon.FILTER_MENTIONS;
            tangon = _closure1_slot10;
            tangon = tangon.hidePersonalInformation;
            tangon = !tangon;
            michal[oscard] = tangon;
            tangon = _closure1_slot14;
            tangon = tangon.FILTER_HAS;
            oscard = true;
            michal[tangon] = oscard;
            tangon = _closure1_slot14;
            tangon = tangon.FILTER_BEFORE;
            michal[tangon] = oscard;
            tangon = _closure1_slot14;
            tangon = tangon.FILTER_AFTER;
            michal[tangon] = oscard;
            tangon = _closure1_slot14;
            tangon = tangon.FILTER_ON;
            michal[tangon] = oscard;
            tangon = _closure1_slot14;
            oscard = tangon.FILTER_IN;
            golfie = _closure1_slot9;
            tangon = golfie.getSearchType;
            golfie = tangon.bind(golfie)();
            tangon = _closure1_slot15;
            tangon = tangon.GUILD;
            tangon = golfie === tangon;
            michal[oscard] = tangon;
            tangon = _closure1_slot14;
            oscard = tangon.FILTER_PINNED;
            tangon = false;
            michal[oscard] = tangon;
            var _closure2_slot0 = michal;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 15;
            tangon = tangon[michal];
            michal = undefined;
            tangon = oscard.bind(michal)(tangon);
            michal = tangon.getFilterAutocompletions;
            tangon = michal.bind(tangon)(report);
            michal = tangon.filter;
            entity = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity.token;
                entity = michal[entity];
                return entity;
            };
            michal = michal.bind(tangon)(entity);
            entity = {};
            zuuluu = _closure1_slot13;
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
            report = argFoo;
            backup = argBar;
            var _closure2_slot0 = report;
            var _closure2_slot1 = backup;
            tangon = null;
            entity = tangon != report;
            oscard = '';
            zuuluu = oscard;
            if(!entity) { _fun00018_ip = 42; continue _fun00017 }
 32:
            entity = report.getFullMatch;
            zuuluu = entity.bind(report)();
 42:
            entity = zuuluu.trim;
            golfie = entity.bind(zuuluu)();
            entity = new Array(0);
            var _closure2_slot2 = entity;
            zuuluu = tangon != golfie;
            if(!zuuluu) { _fun00018_ip = 71; continue _fun00017 }
 67:
            zuuluu = oscard !== golfie;
 71:
            if(!zuuluu) { _fun00018_ip = 522; continue _fun00017 }
 77:
            option = _closure1_slot9;
            zuuluu = option.getSearchType;
            verify = zuuluu.bind(option)(backup);
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.FILTER_HAS;
            option = new Array(1);
            option[0] = zuuluu;
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.hidePersonalInformation;
            if(zuuluu) { _fun00018_ip = 166; continue _fun00017 }
 126:
            offset = option.push;
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.FILTER_FROM;
            zuuluu = offset.bind(option)(zuuluu);
            offset = option.push;
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.FILTER_MENTIONS;
            zuuluu = offset.bind(option)(zuuluu);
 166:
            zuuluu = _closure1_slot15;
            zuuluu = zuuluu.GUILD;
            if(!(verify === zuuluu)) { _fun00018_ip = 200; continue _fun00017 }
 180:
            verify = option.push;
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.FILTER_IN;
            zuuluu = verify.bind(option)(zuuluu);
 200:
            zuuluu = option.forEach;
            michal = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    option = argFoo;
                    michal = null;
                    if(!(michal != option)) { _fun00020_ip = 58; continue _fun00019 }
 9:
                    golfie = _closure1_slot26;
                    yankee = _closure2_slot0;
                    offset = _closure2_slot1;
                    verify = _closure1_slot20;
                    foxtra = undefined;
                    romeon = option;
                    zuuluu = foxtra[golfie](romeon, yankee, offset, verify, option);
                    if(!(michal != zuuluu)) { _fun00020_ip = 58; continue _fun00019 }
 44:
                    michal = _closure2_slot2;
                    entity = michal.push;
                    entity = entity.bind(michal)(zuuluu);
 58:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(option)(michal);
            zuuluu = entity.push;
            michal = tangon != report;
            option = oscard;
            if(!michal) { _fun00018_ip = 242; continue _fun00017 }
 232:
            michal = report.getFullMatch;
            option = michal.bind(report)();
 242:
            michal = option.trim;
            foxtra = michal.bind(option)();
            verify = tangon != foxtra;
            option = undefined;
            michal = undefined;
            if(!verify) { _fun00018_ip = 517; continue _fun00017 }
 266:
            michal = undefined;
            if(!(oscard !== foxtra)) { _fun00018_ip = 517; continue _fun00017 }
 275:
            verify = _closure1_slot1;
            oscard = _closure1_slot2;
            romeon = 15;
            oscard = oscard[romeon];
            verify = verify.bind(option)(oscard);
            oscard = _closure1_slot14;
            oscard = oscard.FILTER_BEFORE;
            yankee = verify[oscard];
            oscard = tangon == yankee;
            offset = undefined;
            if(oscard) { _fun00018_ip = 340; continue _fun00017 }
 318:
            verify = yankee.getAutocompletions;
            oscard = 1;
            verify = verify.bind(yankee)(foxtra, backup, oscard);
            oscard = 0;
            offset = verify[oscard];
 340:
            verify = _closure1_slot1;
            oscard = _closure1_slot2;
            oscard = oscard[romeon];
            verify = verify.bind(option)(oscard);
            oscard = _closure1_slot14;
            oscard = oscard.FILTER_ON;
            kiloes = verify[oscard];
            oscard = tangon == kiloes;
            verify = undefined;
            if(oscard) { _fun00018_ip = 402; continue _fun00017 }
 380:
            yankee = kiloes.getAutocompletions;
            oscard = 1;
            yankee = yankee.bind(kiloes)(foxtra, backup, oscard);
            oscard = 0;
            verify = yankee[oscard];
 402:
            yankee = _closure1_slot1;
            oscard = _closure1_slot2;
            oscard = oscard[romeon];
            yankee = yankee.bind(option)(oscard);
            oscard = _closure1_slot14;
            oscard = oscard.FILTER_AFTER;
            romeon = yankee[oscard];
            oscard = tangon == romeon;
            option = undefined;
            if(oscard) { _fun00018_ip = 464; continue _fun00017 }
 442:
            yankee = romeon.getAutocompletions;
            oscard = 1;
            yankee = yankee.bind(romeon)(foxtra, backup, oscard);
            oscard = 0;
            option = yankee[oscard];
 464:
            oscard = tangon == offset;
            tangon = null;
            if(oscard) { _fun00018_ip = 514; continue _fun00017 }
 473:
            oscard = {};
            golfie = _closure1_slot13;
            golfie = golfie.DATES;
            oscard['group'] = golfie;
            golfie = new Array(3);
            golfie[0] = offset;
            golfie[1] = verify;
            golfie[2] = option;
            oscard['results'] = golfie;
            tangon = oscard;
 514:
            michal = tangon;
 517:
            michal = zuuluu.bind(entity)(michal);
 522:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 12;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = oscard.getTotalResults;
            oscard = zuuluu.bind(oscard)(entity);
            zuuluu = 5;
            if(!(oscard < zuuluu)) { _fun00018_ip = 584; continue _fun00017 }
 565:
            zuuluu = entity.push;
            michal = _closure1_slot27;
            michal = michal.bind(tangon)(report);
            michal = zuuluu.bind(entity)(michal);
 584:
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
            entity = _closure1_slot12;
            entity = entity.FILTER;
            if(!(tangon !== entity)) { _fun00022_ip = 125; continue _fun00021 }
 32:
            tangon = report.type;
            entity = _closure1_slot12;
            entity = entity.FILTER_ALL;
            if(!(tangon !== entity)) { _fun00022_ip = 105; continue _fun00021 }
 51:
            oscard = report.type;
            entity = _closure1_slot12;
            tangon = entity.EMPTY;
            entity = michal;
            if(!(oscard === tangon)) { _fun00022_ip = 166; continue _fun00021 }
 73:
            oscard = michal.push;
            option = _closure1_slot27;
            golfie = report.token;
            tangon = undefined;
            tangon = option.bind(tangon)(golfie);
            tangon = oscard.bind(michal)(tangon);
            entity = michal;
            _fun00022_ip = 166; continue _fun00021;
 105:
            golfie = _closure1_slot28;
            oscard = report.token;
            tangon = undefined;
            entity = golfie.bind(tangon)(oscard, verify);
            _fun00022_ip = 166; continue _fun00021;
 125:
            tangon = michal.push;
            option = _closure1_slot26;
            foxtra = report.filter;
            romeon = report.token;
            offset = _closure1_slot19;
            backup = undefined;
            yankee = verify;
            zuuluu = backup[option](foxtra, romeon, yankee, offset, verify);
            zuuluu = tangon.bind(michal)(zuuluu);
            entity = michal;
 166:
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    offset = function() { // Original name: handleChannelChange
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 12;
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
            entity = _closure1_slot17;
            michal = entity[zuuluu];
            entity = null;
            if(!(entity != michal)) { _fun00024_ip = 116; continue _fun00023 }
 20:
            verify = michal.query;
            option = michal.mode;
            oscard = michal.tokens;
            entity = michal.cursorScope;
            golfie = michal.autocompletes;
            michal = _closure1_slot17;
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
                    zuuluu = _closure1_slot13;
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
            zuuluu = _closure1_slot9;
            michal = zuuluu.getCurrentSearchId;
            zuuluu = michal.bind(zuuluu)();
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00028_ip = 126; continue _fun00027 }
 25:
            michal = _closure1_slot17;
            michal = michal[zuuluu];
            if(!(tangon != michal)) { _fun00028_ip = 126; continue _fun00027 }
 37:
            michal = _closure1_slot17;
            michal = michal[zuuluu];
            verify = michal.query;
            golfie = michal.mode;
            option = michal.tokens;
            oscard = michal.cursorScope;
            michal = _closure1_slot17;
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
 126:
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
    verify = oscard[michal];
    verify = option.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 4;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot7 = verify;
    verify = 5;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = 6;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot9 = verify;
    verify = 7;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot10 = verify;
    verify = 8;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot11 = verify;
    verify = 9;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    yankee = verify.SearchPopoutModes;
    var _closure1_slot12 = yankee;
    yankee = verify.SearchAutocompleteGroups;
    var _closure1_slot13 = yankee;
    yankee = verify.SearchTokenTypes;
    var _closure1_slot14 = yankee;
    yankee = verify.SearchTypes;
    var _closure1_slot15 = yankee;
    verify = verify.ME;
    var _closure1_slot16 = verify;
    verify = {};
    var _closure1_slot17 = verify;
    verify = {};
    var _closure1_slot18 = verify;
    verify = 10;
    var _closure1_slot19 = verify;
    var _closure1_slot20 = michal;
    michal = 17;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    verify = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: SearchAutocompleteStoreClass
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot3;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot22;
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
            tangon = this;
            zuuluu = tangon.waitFor;
            michal = _closure1_slot8;
            entity = _closure1_slot10;
            entity = zuuluu.bind(tangon)(michal, entity);
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
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                michal = argFoo;
                entity = _closure1_slot17;
                entity = entity[michal];
                tangon = null;
                if(!(tangon == entity)) { _fun00030_ip = 38; continue _fun00029 }
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
    michal = 18;
    michal = oscard[michal];
    backup = option.bind(entity)(michal);
    michal = {};
    yankee = function(argFoo) { // Original name: handleQueryUpdate
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            tangon = entity.searchId;
            verify = entity.tokens;
            option = entity.cursorScope;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            entity = 12;
            golfie = report[entity];
            oscard = undefined;
            offset = zuuluu.bind(oscard)(golfie);
            golfie = offset.getQueryFromTokens;
            yankee = golfie.bind(offset)(verify);
            entity = report[entity];
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = zuuluu.getAutocompleteMode;
            offset = entity.bind(zuuluu)(option, verify);
            entity = _closure1_slot17;
            romeon = entity[tangon];
            zuuluu = null;
            if(!(zuuluu == romeon)) { _fun00032_ip = 94; continue _fun00031 }
 92:
            romeon = {};
 94:
            entity = _closure1_slot18;
            report = entity[tangon];
            entity = romeon.query;
            if(!(yankee === entity)) { _fun00032_ip = 152; continue _fun00031 }
 111:
            entity = romeon.mode;
            if(!(zuuluu != entity)) { _fun00032_ip = 139; continue _fun00031 }
 120:
            entity = romeon.mode;
            golfie = entity.filter;
            entity = offset.filter;
            if(!(golfie === entity)) { _fun00032_ip = 152; continue _fun00031 }
 139:
            golfie = romeon.autocompletes;
            entity = false;
            _fun00032_ip = 472; continue _fun00031;
 152:
            backup = offset.type;
            foxtra = _closure1_slot12;
            foxtra = foxtra.EMPTY;
            if(!(backup !== foxtra)) { _fun00032_ip = 431; continue _fun00031 }
 174:
            backup = offset.type;
            foxtra = _closure1_slot12;
            foxtra = foxtra.FILTER;
            if(!(backup === foxtra)) { _fun00032_ip = 234; continue _fun00031 }
 193:
            backup = offset.filter;
            foxtra = _closure1_slot14;
            foxtra = foxtra.FILTER_FROM;
            if(!(backup !== foxtra)) { _fun00032_ip = 234; continue _fun00031 }
 212:
            backup = offset.filter;
            foxtra = _closure1_slot14;
            foxtra = foxtra.FILTER_MENTIONS;
            if(!(backup === foxtra)) { _fun00032_ip = 431; continue _fun00031 }
 234:
            backup = zuuluu != report;
            golfie = undefined;
            entity = true;
            if(!backup) { _fun00032_ip = 472; continue _fun00031 }
 248:
            backup = offset.token;
            if(!(zuuluu != backup)) { _fun00032_ip = 289; continue _fun00031 }
 258:
            kiloes = backup.getFullMatch;
            sizing = kiloes.bind(backup)();
            kiloes = sizing.trim;
            kiloes = kiloes.bind(sizing)();
            sizing = kiloes.length;
            kiloes = 0;
            if(!(!(sizing > kiloes))) { _fun00032_ip = 321; continue _fun00031 }
 289:
            sizing = report.context;
            kiloes = sizing.clearQuery;
            kiloes = kiloes.bind(sizing)();
            kiloes = _closure1_slot29;
            golfie = kiloes.bind(oscard)(tangon, offset);
            entity = true;
            _fun00032_ip = 472; continue _fun00031;
 321:
            kiloes = _closure1_slot1;
            sizing = _closure1_slot2;
            foxtra = 13;
            foxtra = sizing[foxtra];
            output = kiloes.bind(oscard)(foxtra);
            sizing = output.requestMembers;
            foxtra = backup.getFullMatch;
            kiloes = foxtra.bind(backup)();
            foxtra = kiloes.trim;
            kiloes = foxtra.bind(kiloes)();
            foxtra = _closure1_slot19;
            foxtra = sizing.bind(output)(tangon, kiloes, foxtra);
            sizing = report.context;
            kiloes = sizing.setQuery;
            foxtra = backup.getFullMatch;
            backup = foxtra.bind(backup)();
            foxtra = backup.trim;
            backup = foxtra.bind(backup)();
            foxtra = {};
            foxtra['guild'] = tangon;
            foxtra = kiloes.bind(sizing)(backup, foxtra);
            golfie = romeon.autocompletes;
            entity = false;
            _fun00032_ip = 472; continue _fun00031;
 431:
            if(!(zuuluu != report)) { _fun00032_ip = 460; continue _fun00031 }
 435:
            romeon = report.context;
            zuuluu = romeon.clearQuery;
            zuuluu = zuuluu.bind(romeon)();
            zuuluu = new Array(0);
            report['results'] = zuuluu;
 460:
            zuuluu = _closure1_slot29;
            golfie = zuuluu.bind(oscard)(tangon, offset);
            entity = true;
 472:
            zuuluu = _closure1_slot17;
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
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            michal = entity.searchId;
            zuuluu = _closure1_slot18;
            tangon = zuuluu[michal];
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00034_ip = 59; continue _fun00033 }
 26:
            report = tangon.context;
            zuuluu = report.destroy;
            zuuluu = zuuluu.bind(report)();
            zuuluu = new Array(0);
            tangon['results'] = zuuluu;
            zuuluu = _closure1_slot18;
            zuuluu = delete zuuluu[michal];
 59:
            entity = _closure1_slot17;
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
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.searchId;
            entity = null;
            if(!(entity == zuuluu)) { _fun00036_ip = 56; continue _fun00035 }
 15:
            entity = global;
            report = entity.Object;
            tangon = report.keys;
            michal = _closure1_slot17;
            tangon = tangon.bind(report)(michal);
            michal = tangon.forEach;
            entity = _closure1_slot30;
            entity = michal.bind(tangon)(entity);
            _fun00036_ip = 70; continue _fun00035;
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
        michal = _closure1_slot17;
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
    var _closure1_slot21 = michal;
    tangon = 19;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/SearchAutocompleteStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();