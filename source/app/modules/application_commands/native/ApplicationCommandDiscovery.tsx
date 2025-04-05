// app/modules/application_commands/native/ApplicationCommandDiscovery.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot20;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot20;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
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
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    offset = 1;
    tangon = oscard[offset];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot6 = golfie;
    tangon = tangon.SectionList;
    var _closure1_slot7 = tangon;
    golfie = 3;
    tangon = oscard[golfie];
    tangon = report.bind(entity)(tangon);
    option = tangon.BuiltInSectionId;
    var _closure1_slot8 = option;
    tangon = tangon.DISCOVERY_COMMANDS_QUERY_LIMIT;
    var _closure1_slot9 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ITEM_HEIGHT;
    var _closure1_slot10 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AUTOCOMPLETE_ROW_HEIGHT;
    var _closure1_slot11 = tangon;
    option = 6;
    option = oscard[option];
    option = report.bind(entity)(option);
    verify = option.AnalyticEvents;
    var _closure1_slot12 = verify;
    option = option.SectionListElementType;
    var _closure1_slot13 = option;
    option = 7;
    option = oscard[option];
    option = report.bind(entity)(option);
    verify = option.jsx;
    var _closure1_slot14 = verify;
    verify = option.Fragment;
    var _closure1_slot15 = verify;
    option = option.jsxs;
    var _closure1_slot16 = option;
    tangon = golfie * tangon;
    var _closure1_slot17 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    verify['flex'] = offset;
    tangon['discoveryWrapper'] = verify;
    verify = {'height': 50, 'width': 50, 'marginBottom': 16};
    tangon['noCommandsImage'] = verify;
    verify = {'padding': 0, 'height': 100};
    tangon['noCommandsContainer'] = verify;
    verify = {};
    offset = 10;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = offset;
    tangon['commandsList'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot18 = tangon;
    tangon = 25;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/application_commands/native/ApplicationCommandDiscovery.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ApplicationCommandDiscovery
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            option = entity.style;
            michal = entity.onPressSlashItem;
            var _closure2_slot0 = michal;
            zuuluu = entity.onHeightChange;
            var _closure2_slot1 = zuuluu;
            foxtra = entity.channel;
            romeon = entity.canOnlyUseTextCommands;
            tangon = undefined;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            var _closure2_slot12 = tangon;
            var _closure2_slot13 = tangon;
            var _closure2_slot14 = tangon;
            var _closure2_slot15 = tangon;
            var _closure2_slot16 = tangon;
            var _closure2_slot17 = tangon;
            entity = _closure1_slot18;
            output = entity.bind(tangon)();
            var _closure2_slot2 = output;
            golfie = _closure1_slot5;
            entity = golfie.createRef;
            echoed = entity.bind(golfie)();
            var _closure2_slot3 = echoed;
            michal = golfie.useState;
            entity = 0;
            verify = michal.bind(golfie)(entity);
            oscard = _closure1_slot4;
            michal = 2;
            michal = oscard.bind(tangon)(verify, michal);
            entity = michal[entity];
            var _closure2_slot4 = entity;
            backup = 1;
            offset = michal[backup];
            var _closure2_slot5 = offset;
            oscard = golfie.useRef;
            michal = false;
            michal = oscard.bind(golfie)(michal);
            var _closure2_slot6 = michal;
            kiloes = _closure1_slot0;
            sizing = _closure1_slot3;
            michal = 11;
            michal = sizing[michal];
            golfie = kiloes.bind(tangon)(michal);
            oscard = golfie.useCommandDiscoveryManager;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.initialSectionId;
                return entity;
            };
            update = oscard.bind(golfie)(michal);
            var _closure2_slot7 = update;
            oscard = _closure1_slot2;
            michal = 12;
            michal = sizing[michal];
            golfie = oscard.bind(tangon)(michal);
            oscard = golfie.useDiscovery;
            michal = {};
            verify = {};
            verify['channel'] = foxtra;
            foxtra = 'channel';
            verify['type'] = foxtra;
            michal['context'] = verify;
            verify = {};
            foxtra = 13;
            foxtra = sizing[foxtra];
            foxtra = kiloes.bind(tangon)(foxtra);
            foxtra = foxtra.ApplicationCommandType;
            kiloes = foxtra.CHAT;
            foxtra = new Array(1);
            foxtra[0] = kiloes;
            verify['commandTypes'] = foxtra;
            kiloes = _closure1_slot0;
            sizing = _closure1_slot3;
            foxtra = 14;
            foxtra = sizing[foxtra];
            foxtra = kiloes.bind(tangon)(foxtra);
            kiloes = foxtra.BuiltInCommandFilter;
            if(romeon) { _fun00008_ip = 336; continue _fun00007 }
 328:
            foxtra = kiloes.ALLOW;
            _fun00008_ip = 342; continue _fun00007;
 336:
            foxtra = kiloes.ONLY_TEXT;
 342:
            verify['builtIns'] = foxtra;
            romeon = !romeon;
            verify['applicationCommands'] = romeon;
            michal['filters'] = verify;
            romeon = {'placeholderCount': 3, 'limit': null, 'includeFrecency': true};
            verify = _closure1_slot9;
            romeon['limit'] = verify;
            verify = true;
            michal['options'] = romeon;
            michal['allowFetch'] = verify;
            oscard = oscard.bind(golfie)(michal);
            golfie = oscard.sectionDescriptors;
            _closure2_slot8 = golfie;
            michal = oscard.activeSections;
            _closure2_slot9 = michal;
            result = oscard.commandsByActiveSection;
            _closure2_slot10 = result;
            michal = oscard.hasMoreAfter;
            _closure2_slot11 = michal;
            foxtra = oscard.loading;
            michal = oscard.filteredSectionId;
            _closure2_slot12 = michal;
            romeon = oscard.scrollDown;
            _closure2_slot13 = romeon;
            romeon = oscard.filterSection;
            _closure2_slot14 = romeon;
            oscard = _closure1_slot5;
            sizing = oscard.useEffect;
            kiloes = new Array(4);
            kiloes[0] = romeon;
            kiloes[1] = update;
            kiloes[2] = offset;
            kiloes[3] = golfie;
            offset = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot7;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00010_ip = 76; continue _fun00009 }
 13:
                    tangon = _closure2_slot14;
                    michal = _closure2_slot7;
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = _closure2_slot8;
                    tangon = report.findIndex;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.id;
                        entity = _closure2_slot7;
                        entity = michal === entity;
                        return entity;
                    };
                    tangon = tangon.bind(report)(michal);
                    michal = _closure2_slot5;
                    report = -1;
                    entity = 0;
                    if(!(report !== tangon)) { _fun00010_ip = 71; continue _fun00009 }
 68:
                    entity = tangon;
 71:
                    entity = michal.bind(zuuluu)(entity);
 76:
                    entity = undefined;
                    return entity;
                }
            };
            offset = sizing.bind(oscard)(offset, kiloes);
            sizing = oscard.useEffect;
            kiloes = function() {
                tangon = _closure1_slot0;
                report = _closure1_slot3;
                michal = 15;
                michal = report[michal];
                zuuluu = undefined;
                michal = tangon.bind(zuuluu)(michal);
                golfie = michal.AccessibilityAnnouncer;
                oscard = golfie.announce;
                michal = 16;
                option = report[michal];
                option = tangon.bind(zuuluu)(option);
                verify = option.intl;
                option = verify.string;
                michal = report[michal];
                michal = tangon.bind(zuuluu)(michal);
                michal = michal.t;
                michal = michal.2wfLMj;
                michal = option.bind(verify)(michal);
                michal = oscard.bind(golfie)(michal);
                michal = 17;
                michal = report[michal];
                zuuluu = tangon.bind(zuuluu)(michal);
                michal = zuuluu.trackWithMetadata;
                entity = _closure1_slot12;
                entity = entity.APPLICATION_COMMAND_BROWSER_OPENED;
                entity = michal.bind(zuuluu)(entity);
                entity = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.updateInitialSectionId;
                    michal = michal.bind(zuuluu)(entity);
                    return entity;
                };
                return entity;
            };
            offset = new Array(0);
            offset = sizing.bind(oscard)(kiloes, offset);
            kiloes = oscard.useEffect;
            offset = new Array(2);
            offset[0] = result;
            offset[1] = zuuluu;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00012_ip = 62; continue _fun00011 }
 13:
                    zuuluu = _closure2_slot1;
                    oscard = _closure2_slot10;
                    entity = oscard.length;
                    report = 0;
                    michal = 0;
                    if(!(michal !== entity)) { _fun00012_ip = 55; continue _fun00011 }
 34:
                    tangon = oscard.reduce;
                    entity = function(argFoo, argBar) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            entity = argBar;
                            michal = entity.data;
                            zuuluu = michal.length;
                            michal = 0;
                            if(!(michal !== zuuluu)) { _fun00014_ip = 89; continue _fun00013 }
 19:
                            report = _closure1_slot0;
                            tangon = _closure1_slot3;
                            michal = 8;
                            tangon = tangon[michal];
                            michal = undefined;
                            michal = report.bind(michal)(tangon);
                            michal = michal.APPLICATION_SECTION_HEADER_HEIGHT;
                            tangon = _closure1_slot11;
                            zuuluu = _closure1_slot10;
                            zuuluu = tangon + zuuluu;
                            entity = entity.data;
                            entity = entity.length;
                            entity = zuuluu * entity;
                            michal = michal + entity;
                            entity = argFoo;
                            entity = entity + michal;
                            _fun00014_ip = 127; continue _fun00013;
 89:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            michal = 8;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            michal = tangon.bind(michal)(zuuluu);
                            zuuluu = michal.APPLICATION_SECTION_HEADER_HEIGHT;
                            michal = 160;
                            entity = zuuluu + michal;
 127:
                            return entity;
                        }
                    };
                    michal = tangon.bind(oscard)(entity, report);
 55:
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 62:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = kiloes.bind(oscard)(zuuluu, offset);
            offset = oscard.useCallback;
            zuuluu = new Array(3);
            zuuluu[0] = golfie;
            zuuluu[1] = romeon;
            zuuluu[2] = michal;
            michal = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = argFoo;
                    michal = _closure2_slot8;
                    michal = michal[tangon];
                    report = michal.id;
                    zuuluu = _closure2_slot12;
                    if(!(report !== zuuluu)) { _fun00016_ip = 76; continue _fun00015 }
 27:
                    report = michal.id;
                    zuuluu = _closure1_slot8;
                    zuuluu = zuuluu.FRECENCY;
                    if(!(report !== zuuluu)) { _fun00016_ip = 76; continue _fun00015 }
 49:
                    report = _closure2_slot14;
                    michal = michal.id;
                    zuuluu = undefined;
                    michal = report.bind(zuuluu)(michal);
                    michal = _closure2_slot5;
                    michal = michal.bind(zuuluu)(tangon);
                    _fun00016_ip = 100; continue _fun00015;
 76:
                    tangon = _closure2_slot14;
                    zuuluu = undefined;
                    michal = null;
                    michal = tangon.bind(zuuluu)(michal);
                    michal = _closure2_slot5;
                    entity = 0;
                    entity = michal.bind(zuuluu)(entity);
 100:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 11;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.updateInitialSectionId;
                    michal = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            update = offset.bind(oscard)(michal, zuuluu);
            _closure2_slot15 = update;
            offset = oscard.useCallback;
            zuuluu = function() {
                michal = _closure2_slot6;
                entity = true;
                michal['current'] = entity;
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                entity = 17;
                zuuluu = zuuluu[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.trackWithMetadata;
                michal = _closure1_slot12;
                michal = michal.APPLICATION_COMMAND_BROWSER_SCROLLED;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = new Array(0);
            sizing = offset.bind(oscard)(zuuluu, michal);
            offset = oscard.useCallback;
            zuuluu = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    michal = entity.nativeEvent;
                    entity = michal.contentOffset;
                    tangon = michal.targetContentOffset;
                    zuuluu = entity.y;
                    entity = null;
                    report = entity == tangon;
                    entity = undefined;
                    michal = undefined;
                    if(report) { _fun00018_ip = 45; continue _fun00017 }
 40:
                    michal = tangon.y;
 45:
                    if(!(zuuluu === michal)) { _fun00018_ip = 64; continue _fun00017 }
 49:
                    zuuluu = _closure2_slot6;
                    michal = false;
                    zuuluu['current'] = michal;
 64:
                    return entity;
                }
            };
            michal = new Array(0);
            kiloes = offset.bind(oscard)(zuuluu, michal);
            offset = oscard.useCallback;
            zuuluu = function() {
                michal = _closure2_slot6;
                entity = false;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            michal = new Array(0);
            romeon = offset.bind(oscard)(zuuluu, michal);
            offset = oscard.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = result;
            michal = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = 0;
                    var _closure3_slot0 = entity;
                    entity = new Array(0);
                    var _closure3_slot1 = entity;
                    oscard = function(argFoo) { // Original name: _loop
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            entity = argFoo;
                            var _closure4_slot0 = entity;
                            tangon = _closure2_slot10;
                            zuuluu = tangon.findIndex;
                            michal = function(argFoo) {
                                entity = argFoo;
                                entity = entity.section;
                                michal = entity.id;
                                entity = _closure4_slot0;
                                entity = entity.id;
                                entity = michal === entity;
                                return entity;
                            };
                            michal = zuuluu.bind(tangon)(michal);
                            zuuluu = 0;
                            if(!(!(michal >= zuuluu))) { _fun00022_ip = 63; continue _fun00021 }
 40:
                            report = _closure3_slot1;
                            tangon = report.push;
                            zuuluu = _closure3_slot0;
                            zuuluu = tangon.bind(report)(zuuluu);
                            _fun00022_ip = 153; continue _fun00021;
 63:
                            entity = _closure2_slot10;
                            entity = entity[michal];
                            entity = entity.data;
                            zuuluu = entity.length;
                            michal = _closure1_slot11;
                            michal = zuuluu * michal;
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            entity = 8;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            entity = tangon.bind(entity)(zuuluu);
                            entity = entity.APPLICATION_SECTION_HEADER_HEIGHT;
                            zuuluu = michal + entity;
                            entity = _closure3_slot0;
                            entity = zuuluu + entity;
                            tangon = _closure3_slot1;
                            zuuluu = tangon.push;
                            zuuluu = zuuluu.bind(tangon)(entity);
                            _closure3_slot0 = entity;
 153:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = _closure1_slot19;
                    michal = _closure2_slot8;
                    report = undefined;
                    tangon = zuuluu.bind(report)(michal);
                    zuuluu = tangon.bind(report)();
                    michal = zuuluu.done;
                    if(michal) { _fun00020_ip = 81; continue _fun00019 }
 56:
                    michal = zuuluu.value;
                    michal = oscard.bind(report)(michal);
                    golfie = tangon.bind(report)();
                    michal = golfie.done;
                    zuuluu = golfie;
                    if(!michal) { _fun00020_ip = 56; continue _fun00019 }
 81:
                    return entity;
                }
            };
            michal = offset.bind(oscard)(michal, zuuluu);
            _closure2_slot16 = michal;
            offset = oscard.useMemo;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot3;
                entity = 18;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.throttle;
                michal = function(argFoo) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        golfie = argFoo;
                        michal = _closure2_slot16;
                        michal = michal.length;
                        oscard = 0;
                        michal = oscard < michal;
                        zuuluu = 0;
                        if(!michal) { _fun00024_ip = 124; continue _fun00023 }
 26:
                        michal = _closure2_slot16;
                        michal = michal[oscard];
                        report = 0;
                        tangon = 0;
                        if(!(oscard !== michal)) { _fun00024_ip = 63; continue _fun00023 }
 42:
                        michal = _closure2_slot16;
                        michal = michal[oscard];
                        michal = golfie >= michal;
                        report = 0;
                        tangon = 0;
                        zuuluu = 0;
                        if(!michal) { _fun00024_ip = 124; continue _fun00023 }
 63:
                        option = report + 1;
                        verify = tangon + 1;
                        michal = _closure2_slot16;
                        michal = michal.length;
                        zuuluu = option;
                        if(!(verify < michal)) { _fun00024_ip = 124; continue _fun00023 }
 85:
                        michal = _closure2_slot16;
                        michal = michal[verify];
                        report = option;
                        tangon = verify;
                        if(oscard === michal) { _fun00024_ip = 63; continue _fun00023 }
 103:
                        michal = _closure2_slot16;
                        michal = michal[verify];
                        report = option;
                        tangon = verify;
                        zuuluu = report;
                        if(golfie >= michal) { _fun00024_ip = 63; continue _fun00023 }
 124:
                        michal = _closure2_slot5;
                        entity = undefined;
                        michal = michal.bind(entity)(zuuluu);
                        return entity;
                    }
                };
                entity = 100;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = offset.bind(oscard)(michal, zuuluu);
            _closure2_slot17 = michal;
            offset = oscard.useCallback;
            zuuluu = function(argFoo, argBar) {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    tangon = argFoo;
                    michal = argBar;
                    entity = null;
                    if(!(entity != tangon)) { _fun00026_ip = 424; continue _fun00025 }
 15:
                    entity = _closure1_slot13;
                    echoed = entity.ROW;
                    entity = _closure1_slot19;
                    option = undefined;
                    result = entity.bind(option)(tangon);
                    report = result.bind(option)();
                    entity = report.done;
                    yankee = 1;
                    output = report;
                    sizing = 0;
                    kiloes = 0;
                    backup = 0;
                    oscard = 0;
                    report = 0;
                    golfie = echoed;
                    if(entity) { _fun00026_ip = 291; continue _fun00025 }
 73:
                    entity = output.value;
                    offset = sizing + kiloes;
                    verify = entity.data;
                    verify = verify.length;
                    verify = offset + verify;
                    verify = verify + backup;
                    romeon = verify + yankee;
                    offset = sizing;
                    verify = kiloes;
                    foxtra = backup;
                    if(!(!(romeon >= michal))) { _fun00026_ip = 168; continue _fun00025 }
 117:
                    sizing = offset + yankee;
                    romeon = entity.data;
                    romeon = romeon.length;
                    kiloes = verify + romeon;
                    backup = foxtra + yankee;
                    ctrled = result.bind(option)();
                    romeon = ctrled.done;
                    output = ctrled;
                    oscard = sizing;
                    report = kiloes;
                    golfie = echoed;
                    if(romeon) { _fun00026_ip = 291; continue _fun00025 }
 166:
                    _fun00026_ip = 73; continue _fun00025;
 168:
                    romeon = offset + verify;
                    romeon = romeon + foxtra;
                    if(!(michal !== romeon)) { _fun00026_ip = 275; continue _fun00025 }
 180:
                    backup = offset + verify;
                    romeon = entity.data;
                    romeon = romeon.length;
                    romeon = backup + romeon;
                    romeon = romeon + foxtra;
                    romeon = romeon + yankee;
                    if(!(michal !== romeon)) { _fun00026_ip = 245; continue _fun00025 }
 210:
                    backup = offset + yankee;
                    romeon = michal - backup;
                    romeon = romeon - verify;
                    romeon = romeon - foxtra;
                    report = verify + romeon;
                    romeon = _closure1_slot13;
                    golfie = romeon.ROW;
                    oscard = backup;
                    _fun00026_ip = 291; continue _fun00025;
 245:
                    oscard = offset + yankee;
                    entity = entity.data;
                    entity = entity.length;
                    report = verify + entity;
                    entity = _closure1_slot13;
                    golfie = entity.FOOTER;
                    _fun00026_ip = 291; continue _fun00025;
 275:
                    entity = _closure1_slot13;
                    golfie = entity.HEADER;
                    oscard = offset;
                    report = verify;
 291:
                    entity = _closure1_slot13;
                    entity = entity.ROW;
                    if(!(entity !== golfie)) { _fun00026_ip = 361; continue _fun00025 }
 305:
                    entity = _closure1_slot13;
                    entity = entity.HEADER;
                    if(!(entity !== golfie)) { _fun00026_ip = 333; continue _fun00025 }
 319:
                    entity = _closure1_slot13;
                    entity = entity.FOOTER;
                    tangon = 0;
                    _fun00026_ip = 365; continue _fun00025;
 333:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot3;
                    entity = 8;
                    entity = verify[entity];
                    entity = golfie.bind(option)(entity);
                    tangon = entity.APPLICATION_SECTION_HEADER_HEIGHT;
                    _fun00026_ip = 365; continue _fun00025;
 361:
                    tangon = _closure1_slot11;
 365:
                    entity = {};
                    entity['length'] = tangon;
                    golfie = _closure1_slot0;
                    verify = _closure1_slot3;
                    tangon = 8;
                    tangon = verify[tangon];
                    tangon = golfie.bind(option)(tangon);
                    tangon = tangon.APPLICATION_SECTION_HEADER_HEIGHT;
                    tangon = oscard * tangon;
                    zuuluu = _closure1_slot11;
                    zuuluu = report * zuuluu;
                    zuuluu = tangon + zuuluu;
                    entity['offset'] = zuuluu;
                    entity['index'] = michal;
                    return entity;
 424:
                    entity = {'length': 0, 'offset': 0};
                    entity['index'] = michal;
                    return entity;
                }
            };
            michal = new Array(0);
            offset = offset.bind(oscard)(zuuluu, michal);
            zuuluu = oscard.useMemo;
            michal = new Array(3);
            michal[0] = update;
            michal[1] = golfie;
            michal[2] = entity;
            entity = function() {
                tangon = _closure1_slot14;
                michal = _closure1_slot1;
                zuuluu = _closure1_slot3;
                entity = 19;
                entity = zuuluu[entity];
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(entity);
                entity = {};
                oscard = _closure2_slot15;
                entity['onPressSection'] = oscard;
                oscard = _closure2_slot8;
                entity['sections'] = oscard;
                report = _closure2_slot4;
                entity['selectedIndex'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            oscard = zuuluu.bind(oscard)(entity, michal);
            zuuluu = _closure1_slot16;
            michal = _closure1_slot6;
            entity = {};
            update = output.discoveryWrapper;
            golfie = new Array(2);
            golfie[0] = update;
            golfie[1] = option;
            entity['style'] = golfie;
            option = _closure1_slot14;
            golfie = _closure1_slot7;
            report = {};
            report['ref'] = echoed;
            report['sections'] = result;
            output = output.commandsList;
            report['style'] = output;
            report['onScrollBeginDrag'] = sizing;
            report['onScrollEndDrag'] = kiloes;
            report['onMomentumScrollEnd'] = romeon;
            romeon = function(argFoo) { // Original name: onScroll
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    entity = argFoo;
                    michal = entity.nativeEvent;
                    report = michal.layoutMeasurement;
                    tangon = michal.contentSize;
                    entity = michal.contentOffset;
                    zuuluu = michal.contentInset;
                    oscard = entity.y;
                    golfie = _closure2_slot17;
                    entity = undefined;
                    golfie = golfie.bind(entity)(oscard);
                    golfie = _closure2_slot6;
                    golfie = golfie.current;
                    if(golfie) { _fun00028_ip = 287; continue _fun00027 }
 66:
                    golfie = _closure2_slot9;
                    golfie = golfie.length;
                    foxtra = 0;
                    if(!(golfie > foxtra)) { _fun00028_ip = 287; continue _fun00027 }
 84:
                    golfie = zuuluu.top;
                    if(!(!(oscard < golfie))) { _fun00028_ip = 247; continue _fun00027 }
 96:
                    option = tangon.height;
                    golfie = report.height;
                    golfie = option - golfie;
                    zuuluu = zuuluu.bottom;
                    zuuluu = golfie - zuuluu;
                    if(!(oscard > zuuluu)) { _fun00028_ip = 287; continue _fun00027 }
 126:
                    zuuluu = _closure2_slot3;
                    option = zuuluu.current;
                    zuuluu = null;
                    if(!(zuuluu != option)) { _fun00028_ip = 287; continue _fun00027 }
 144:
                    golfie = option.scrollToLocation;
                    zuuluu = {};
                    verify = _closure2_slot9;
                    offset = verify.length;
                    verify = 1;
                    offset = offset - verify;
                    zuuluu['sectionIndex'] = offset;
                    offset = global;
                    romeon = offset.Math;
                    yankee = romeon.max;
                    backup = _closure2_slot10;
                    offset = backup.length;
                    offset = offset - verify;
                    offset = backup[offset];
                    offset = offset.data;
                    offset = offset.length;
                    offset = offset - verify;
                    offset = yankee.bind(romeon)(offset, foxtra);
                    zuuluu['itemIndex'] = offset;
                    zuuluu['viewPosition'] = verify;
                    verify = false;
                    zuuluu['animated'] = verify;
                    zuuluu = golfie.bind(option)(zuuluu);
                    _fun00028_ip = 287; continue _fun00027;
 247:
                    zuuluu = _closure2_slot3;
                    option = zuuluu.current;
                    zuuluu = null;
                    if(!(zuuluu != option)) { _fun00028_ip = 287; continue _fun00027 }
 262:
                    golfie = option.scrollToLocation;
                    zuuluu = {'sectionIndex': 0, 'itemIndex': 0, 'viewPosition': 0, 'animated': false};
                    zuuluu = golfie.bind(option)(zuuluu);
 287:
                    zuuluu = _closure2_slot11;
                    if(!zuuluu) { _fun00028_ip = 323; continue _fun00027 }
 294:
                    report = report.height;
                    report = oscard + report;
                    oscard = tangon.height;
                    tangon = _closure1_slot17;
                    tangon = oscard - tangon;
                    zuuluu = report >= tangon;
 323:
                    if(!zuuluu) { _fun00028_ip = 334; continue _fun00027 }
 326:
                    michal = _closure2_slot13;
                    michal = michal.bind(entity)();
 334:
                    return entity;
                }
            };
            report['onScroll'] = romeon;
            romeon = 16;
            report['scrollEventThrottle'] = romeon;
            romeon = function(argFoo) { // Original name: keyExtractor
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            report['keyExtractor'] = romeon;
            romeon = null;
            if(!foxtra) { _fun00008_ip = 917; continue _fun00007 }
 907:
            foxtra = {};
            foxtra['minIndexForVisible'] = backup;
            romeon = foxtra;
 917:
            report['maintainVisibleContentPosition'] = romeon;
            romeon = function(argFoo) { // Original name: renderItem
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = argFoo;
                    golfie = entity.item;
                    var _closure3_slot0 = golfie;
                    oscard = entity.section;
                    var _closure3_slot1 = oscard;
                    tangon = undefined;
                    var _closure3_slot2 = tangon;
                    zuuluu = golfie.inputType;
                    report = _closure1_slot0;
                    option = _closure1_slot3;
                    michal = 20;
                    michal = option[michal];
                    michal = report.bind(tangon)(michal);
                    michal = michal.ApplicationCommandInputType;
                    michal = michal.PLACEHOLDER;
                    if(!(zuuluu !== michal)) { _fun00030_ip = 180; continue _fun00029 }
 74:
                    report = _closure2_slot8;
                    zuuluu = report.find;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.id;
                        entity = _closure3_slot0;
                        entity = entity.applicationId;
                        entity = michal === entity;
                        return entity;
                    };
                    option = zuuluu.bind(report)(michal);
                    _closure3_slot2 = option;
                    report = _closure1_slot14;
                    zuuluu = _closure1_slot1;
                    offset = _closure1_slot3;
                    michal = 22;
                    michal = offset[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    michal['command'] = golfie;
                    verify = function() { // Original name: onPress
                        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                            zuuluu = _closure2_slot0;
                            entity = null;
                            zuuluu = entity == zuuluu;
                            oscard = undefined;
                            entity = undefined;
                            if(zuuluu) { _fun00032_ip = 51; continue _fun00031 }
 20:
                            report = _closure2_slot0;
                            tangon = _closure3_slot0;
                            zuuluu = _closure3_slot2;
                            michal = _closure3_slot1;
                            michal = michal.section;
                            entity = report.bind(oscard)(tangon, zuuluu, michal);
 51:
                            return entity;
                        }
                    };
                    michal['onPress'] = verify;
                    michal['section'] = option;
                    golfie = golfie.applicationId;
                    oscard = oscard.section;
                    oscard = oscard.id;
                    oscard = golfie !== oscard;
                    michal['showIcon'] = oscard;
                    michal = report.bind(tangon)(zuuluu, michal);
                    return michal;
 180:
                    zuuluu = _closure1_slot14;
                    michal = _closure1_slot1;
                    report = _closure1_slot3;
                    entity = 21;
                    entity = report[entity];
                    michal = michal.bind(tangon)(entity);
                    entity = {};
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            report['renderItem'] = romeon;
            yankee = function(argFoo) { // Original name: renderSectionHeader
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    entity = argFoo;
                    backup = entity.section;
                    tangon = _closure1_slot16;
                    zuuluu = _closure1_slot15;
                    michal = {};
                    option = _closure1_slot14;
                    oscard = _closure1_slot1;
                    report = _closure1_slot3;
                    entity = 8;
                    report = report[entity];
                    entity = undefined;
                    golfie = oscard.bind(entity)(report);
                    oscard = {};
                    report = backup.section;
                    oscard['section'] = report;
                    report = backup.section;
                    report = report.id;
                    oscard = option.bind(entity)(golfie, oscard, report);
                    report = new Array(2);
                    report[0] = oscard;
                    oscard = backup.data;
                    golfie = oscard.length;
                    oscard = 0;
                    oscard = oscard === golfie;
                    if(!oscard) { _fun00034_ip = 278; continue _fun00033 }
 105:
                    verify = _closure1_slot14;
                    yankee = _closure1_slot0;
                    kiloes = _closure1_slot3;
                    golfie = 23;
                    golfie = kiloes[golfie];
                    golfie = yankee.bind(entity)(golfie);
                    option = golfie.ThemedEmptyState;
                    golfie = {};
                    romeon = _closure1_slot1;
                    offset = 24;
                    foxtra = kiloes[offset];
                    foxtra = romeon.bind(entity)(foxtra);
                    golfie['lightSource'] = foxtra;
                    offset = kiloes[offset];
                    offset = romeon.bind(entity)(offset);
                    golfie['darkSource'] = offset;
                    offset = 16;
                    romeon = kiloes[offset];
                    romeon = yankee.bind(entity)(romeon);
                    foxtra = romeon.intl;
                    romeon = foxtra.format;
                    offset = kiloes[offset];
                    offset = yankee.bind(entity)(offset);
                    offset = offset.t;
                    yankee = offset.WoQXT0;
                    offset = {};
                    backup = backup.section;
                    backup = backup.name;
                    offset['applicationName'] = backup;
                    offset = romeon.bind(foxtra)(yankee, offset);
                    golfie['body'] = offset;
                    offset = _closure2_slot2;
                    yankee = offset.noCommandsContainer;
                    golfie['containerStyle'] = yankee;
                    offset = offset.noCommandsImage;
                    golfie['imageStyle'] = offset;
                    oscard = verify.bind(entity)(option, golfie);
 278:
                    report[1] = oscard;
                    michal['children'] = report;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                }
            };
            report['renderSectionHeader'] = yankee;
            report['getItemLayout'] = offset;
            report['stickySectionHeadersEnabled'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();