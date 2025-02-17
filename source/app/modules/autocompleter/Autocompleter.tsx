// app/modules/autocompleter/Autocompleter.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot19;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot19;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function() { // Original name: calculateScore
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = arguments[0];
            zulu = undefined;
            if(!(mike === zulu)) { _fun00008_ip = 11; continue _fun00007 }
 9:
            mike = 0;
 11:
            entity = 1000;
            mike = entity * mike;
            entity = 1;
            tango = null;
            if(!(tango != zulu)) { _fun00008_ip = 32; continue _fun00007 }
 30:
            entity = undefined;
 32:
            entity = mike * entity;
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: getBoosterMap
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            romeo = argFoo;
            mike = argBar;
            mike = mike.frecencyBoosters;
            if(mike) { _fun00010_ip = 21; continue _fun00009 }
 17:
            mike = {};
            return mike;
 21:
            tango = _closure1_slot11;
            zulu = tango.getFrequentlyWithoutFetchingLatest;
            report = zulu.bind(tango)();
            oscar = report.reduce;
            tango = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    mike = argBar;
                    tango = mike.id;
                    zulu = _closure1_slot11;
                    mike = zulu.getScoreWithoutFetchingLatest;
                    mike = mike.bind(zulu)(tango);
                    if(!(mike > entity)) { _fun00012_ip = 36; continue _fun00011 }
 33:
                    entity = mike;
 36:
                    return entity;
                }
            };
            zulu = 0;
            yankee = oscar.bind(report)(tango, zulu);
            tango = new Array(0);
            zulu = _closure1_slot15;
            zulu = zulu.GUILD;
            if(!(zulu !== romeo)) { _fun00010_ip = 202; continue _fun00009 }
 78:
            zulu = _closure1_slot15;
            zulu = zulu.USER;
            if(!(zulu !== romeo)) { _fun00010_ip = 185; continue _fun00009 }
 92:
            zulu = _closure1_slot15;
            zulu = zulu.GROUP_DM;
            if(!(zulu !== romeo)) { _fun00010_ip = 168; continue _fun00009 }
 106:
            zulu = _closure1_slot15;
            zulu = zulu.TEXT_CHANNEL;
            if(!(zulu !== romeo)) { _fun00010_ip = 151; continue _fun00009 }
 120:
            zulu = _closure1_slot15;
            zulu = zulu.VOICE_CHANNEL;
            if(!(zulu === romeo)) { _fun00010_ip = 217; continue _fun00009 }
 134:
            oscar = report.filter;
            zulu = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure1_slot5;
                    entity = zulu instanceof entity;
                    if(!entity) { _fun00014_ip = 27; continue _fun00013 }
 17:
                    mike = zulu.isGuildVocal;
                    entity = mike.bind(zulu)();
 27:
                    return entity;
                }
            };
            tango = oscar.bind(report)(zulu);
            _fun00010_ip = 217; continue _fun00009;
 151:
            oscar = report.filter;
            zulu = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    mike = argFoo;
                    entity = _closure1_slot5;
                    entity = mike instanceof entity;
                    if(!entity) { _fun00016_ip = 33; continue _fun00015 }
 17:
                    tango = _closure1_slot6;
                    zulu = mike.type;
                    mike = undefined;
                    entity = tango.bind(mike)(zulu);
 33:
                    return entity;
                }
            };
            tango = oscar.bind(report)(zulu);
            _fun00010_ip = 217; continue _fun00009;
 168:
            oscar = report.filter;
            zulu = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure1_slot5;
                    entity = zulu instanceof entity;
                    if(!entity) { _fun00018_ip = 27; continue _fun00017 }
 17:
                    mike = zulu.isMultiUserDM;
                    entity = mike.bind(zulu)();
 27:
                    return entity;
                }
            };
            tango = oscar.bind(report)(zulu);
            _fun00010_ip = 217; continue _fun00009;
 185:
            oscar = report.filter;
            zulu = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zulu = argFoo;
                    entity = _closure1_slot5;
                    entity = zulu instanceof entity;
                    if(!entity) { _fun00020_ip = 36; continue _fun00019 }
 17:
                    zulu = zulu.type;
                    mike = _closure1_slot16;
                    mike = mike.DM;
                    entity = zulu === mike;
 36:
                    return entity;
                }
            };
            tango = oscar.bind(report)(zulu);
            _fun00010_ip = 217; continue _fun00009;
 202:
            zulu = report.filter;
            entity = function(argFoo) {
                mike = _closure1_slot8;
                entity = argFoo;
                entity = entity instanceof mike;
                return entity;
            };
            tango = zulu.bind(report)(entity);
 217:
            entity = {};
            zulu = _closure1_slot18;
            options = undefined;
            offset = zulu.bind(options)(tango);
            tango = offset.bind(options)();
            zulu = tango.done;
            golf = 1;
            verify = tango;
            oscar = undefined;
            report = undefined;
            tango = undefined;
            if(zulu) { _fun00010_ip = 545; continue _fun00009 }
 257:
            output = verify.value;
            backup = output.id;
            foxtrot = _closure1_slot11;
            zulu = foxtrot.getScoreWithoutFetchingLatest;
            zulu = zulu.bind(foxtrot)(backup);
            foxtrot = _closure1_slot15;
            foxtrot = foxtrot.USER;
            if(!(romeo === foxtrot)) { _fun00010_ip = 307; continue _fun00009 }
 296:
            foxtrot = _closure1_slot7;
            foxtrot = output instanceof foxtrot;
            if(foxtrot) { _fun00010_ip = 333; continue _fun00009 }
 307:
            foxtrot = zulu / yankee;
            foxtrot = golf + foxtrot;
            entity[backup] = foxtrot;
            kilo = oscar;
            backup = report;
            foxtrot = tango;
            _fun00010_ip = 518; continue _fun00009;
 333:
            result = output.type;
            sizing = _closure1_slot16;
            sizing = sizing.DM;
            if(!(result !== sizing)) { _fun00010_ip = 487; continue _fun00009 }
 355:
            result = output.type;
            sizing = _closure1_slot16;
            sizing = sizing.GROUP_DM;
            kilo = oscar;
            backup = report;
            foxtrot = tango;
            if(!(result === sizing)) { _fun00010_ip = 518; continue _fun00009 }
 386:
            sizing = output.recipients;
            update = sizing.length;
            result = _closure1_slot18;
            sizing = output.recipients;
            echo = result.bind(options)(sizing);
            source = echo.bind(options)();
            sizing = source.done;
            result = source;
            kilo = result;
            backup = update;
            foxtrot = echo;
            if(sizing) { _fun00010_ip = 518; continue _fun00009 }
 436:
            source = result.value;
            control = zulu / yankee;
            sizing = golf / update;
            sizing = control * sizing;
            sizing = golf + sizing;
            entity[source] = sizing;
            source = echo.bind(options)();
            sizing = source.done;
            result = source;
            kilo = result;
            backup = update;
            foxtrot = echo;
            if(sizing) { _fun00010_ip = 518; continue _fun00009 }
 485:
            _fun00010_ip = 436; continue _fun00009;
 487:
            sizing = output.getRecipientId;
            sizing = sizing.bind(output)();
            zulu = zulu / yankee;
            zulu = golf + zulu;
            entity[sizing] = zulu;
            kilo = oscar;
            backup = report;
            foxtrot = tango;
 518:
            sizing = offset.bind(options)();
            zulu = sizing.done;
            oscar = kilo;
            report = backup;
            tango = foxtrot;
            verify = sizing;
            if(!zulu) { _fun00010_ip = 257; continue _fun00009 }
 545:
            tango = _closure1_slot18;
            report = _closure1_slot13;
            zulu = report.getFriendIDs;
            zulu = zulu.bind(report)();
            verify = tango.bind(options)(zulu);
            tango = verify.bind(options)();
            zulu = tango.done;
            report = 0.2;
            oscar = null;
            if(zulu) { _fun00010_ip = 637; continue _fun00009 }
 592:
            offset = tango.value;
            yankee = entity[offset];
            romeo = oscar != yankee;
            zulu = golf;
            if(!romeo) { _fun00010_ip = 614; continue _fun00009 }
 611:
            zulu = yankee;
 614:
            zulu = zulu + report;
            entity[offset] = zulu;
            offset = verify.bind(options)();
            zulu = offset.done;
            tango = offset;
            if(!zulu) { _fun00010_ip = 592; continue _fun00009 }
 637:
            zulu = _closure1_slot18;
            tango = _closure1_slot10;
            mike = tango.getDMUserIds;
            mike = mike.bind(tango)();
            report = zulu.bind(options)(mike);
            zulu = report.bind(options)();
            mike = zulu.done;
            tango = 0.1;
            if(mike) { _fun00010_ip = 727; continue _fun00009 }
 682:
            verify = zulu.value;
            offset = entity[verify];
            yankee = oscar != offset;
            mike = golf;
            if(!yankee) { _fun00010_ip = 704; continue _fun00009 }
 701:
            mike = offset;
 704:
            mike = mike + tango;
            entity[verify] = mike;
            verify = report.bind(options)();
            mike = verify.done;
            zulu = verify;
            if(!mike) { _fun00010_ip = 682; continue _fun00009 }
 727:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    verify = golf.ChannelRecordBase;
    var _closure1_slot5 = verify;
    verify = golf.isGuildSelectableChannelType;
    var _closure1_slot6 = verify;
    golf = golf.PrivateChannelRecord;
    var _closure1_slot7 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot8 = golf;
    golf = 4;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot9 = golf;
    golf = 5;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot10 = golf;
    golf = 6;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot11 = golf;
    golf = 7;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot12 = golf;
    golf = 8;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot13 = golf;
    golf = 9;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot14 = golf;
    golf = 10;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.AutocompleterResultTypes;
    var _closure1_slot15 = golf;
    golf = 11;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.ChannelTypes;
    var _closure1_slot16 = golf;
    options = tango.Object;
    golf = options.freeze;
    tango = {};
    tango = golf.bind(options)(tango);
    var _closure1_slot17 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo, argBar) { // Original name: Autocompleter
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                mike = arguments[2];
                oscar = arguments[3];
                tango = this;
                var _closure3_slot0 = tango;
                entity = undefined;
                if(!(mike === entity)) { _fun00022_ip = 24; continue _fun00021 }
 21:
                mike = 100;
 24:
                if(!(oscar === entity)) { _fun00022_ip = 35; continue _fun00021 }
 28:
                oscar = _closure1_slot17;
 35:
                options = _closure1_slot3;
                golf = _closure2_slot0;
                golf = options.bind(entity)(tango, golf);
                golf = '';
                tango['query'] = golf;
                report = _closure1_slot17;
                tango['options'] = report;
                report = new Array(0);
                tango['results'] = report;
                report = new Array(0);
                tango['_userResults'] = report;
                report = new Array(0);
                tango['_groupDMResults'] = report;
                report = new Array(0);
                tango['_textChannelResults'] = report;
                report = new Array(0);
                tango['_voiceChannelResults'] = report;
                report = new Array(0);
                tango['_guildResults'] = report;
                report = new Array(0);
                tango['_applicationResults'] = report;
                report = new Array(0);
                tango['_linkResults'] = report;
                report = new Array(0);
                tango['_inAppNavigations'] = report;
                report = null;
                tango['_userBlacklist'] = report;
                report = function(argFoo) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.results;
                        report = _closure3_slot0;
                        tango = report._include;
                        mike = _closure1_slot15;
                        mike = mike.USER;
                        mike = tango.bind(report)(mike);
                        if(!mike) { _fun00024_ip = 277; continue _fun00023 }
 46:
                        tango = _closure3_slot0;
                        mike = new Array(0);
                        tango['_userResults'] = mike;
                        mike = _closure1_slot18;
                        oscar = undefined;
                        report = mike.bind(oscar)(zulu);
                        zulu = report.bind(oscar)();
                        mike = zulu.done;
                        tango = null;
                        if(mike) { _fun00024_ip = 216; continue _fun00023 }
 88:
                        mike = zulu.value;
                        verify = mike.id;
                        romeo = mike.score;
                        yankee = mike.comparator;
                        options = _closure1_slot14;
                        mike = options.getUser;
                        offset = mike.bind(options)(verify);
                        if(!(tango != offset)) { _fun00024_ip = 201; continue _fun00023 }
 129:
                        mike = _closure3_slot0;
                        verify = mike._userResults;
                        options = verify.push;
                        mike = {};
                        foxtrot = _closure1_slot15;
                        foxtrot = foxtrot.USER;
                        mike['type'] = foxtrot;
                        mike['record'] = offset;
                        offset = _closure1_slot20;
                        offset = offset.bind(oscar)(romeo);
                        mike['score'] = offset;
                        romeo = tango != yankee;
                        offset = undefined;
                        if(!romeo) { _fun00024_ip = 191; continue _fun00023 }
 188:
                        offset = yankee;
 191:
                        mike['comparator'] = offset;
                        mike = options.bind(verify)(mike);
 201:
                        options = report.bind(oscar)();
                        mike = options.done;
                        zulu = options;
                        if(!mike) { _fun00024_ip = 88; continue _fun00023 }
 216:
                        mike = _closure3_slot0;
                        zulu = mike._userResults;
                        zulu = zulu.length;
                        mike = mike._limit;
                        if(!(zulu > mike)) { _fun00024_ip = 263; continue _fun00023 }
 241:
                        mike = _closure3_slot0;
                        zulu = mike._userResults;
                        mike = mike._limit;
                        zulu['length'] = mike;
 263:
                        mike = _closure3_slot0;
                        entity = mike.updateAllResults;
                        entity = entity.bind(mike)();
 277:
                        entity = undefined;
                        return entity;
                    }
                };
                tango['parseUserResults'] = report;
                zulu = function() {
                    entity = global;
                    zulu = entity.clearTimeout;
                    report = _closure3_slot0;
                    mike = report._asyncTimeout;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    mike = 12;
                    mike = golf[mike];
                    zulu = oscar.bind(entity)(mike);
                    offset = report._userResults;
                    mike = new Array(0);
                    verify = 0;
                    yankee = mike;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._groupDMResults;
                    yankee = mike;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._textChannelResults;
                    yankee = mike;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._voiceChannelResults;
                    yankee = mike;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._guildResults;
                    yankee = mike;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._linkResults;
                    yankee = mike;
                    verify = arraySpread(yankee, offset, verify);
                    offset = report._inAppNavigations;
                    yankee = mike;
                    tango = arraySpread(yankee, offset, verify);
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.uniqBy;
                    mike = function(argFoo) {
                        entity = argFoo;
                        report = entity.type;
                        entity = entity.record;
                        tango = entity.id;
                        entity = global;
                        entity = entity.HermesInternal;
                        zulu = entity.concat;
                        mike = '';
                        entity = '-';
                        entity = zulu.bind(mike)(report, entity, tango);
                        return entity;
                    };
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.sort;
                    mike = 13;
                    mike = golf[mike];
                    mike = oscar.bind(entity)(mike);
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.value;
                    mike = mike.bind(zulu)();
                    report['results'] = mike;
                    tango = report.onResultsChange;
                    zulu = report.results;
                    mike = report.query;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                tango['updateAllResults'] = zulu;
                zulu = argFoo;
                tango['onResultsChange'] = zulu;
                report = tango.setOptions;
                zulu = true;
                zulu = report.bind(tango)(oscar, zulu);
                tango['_limit'] = mike;
                mike = tango.createSearchContext;
                mike = mike.bind(tango)();
                zulu = tango.setResultTypes;
                mike = argBar;
                mike = zulu.bind(tango)(mike);
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'createSearchContext';
        entity['key'] = mike;
        mike = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                mike = this;
                zulu = mike.userSearchContext;
                entity = null;
                if(!(entity == zulu)) { _fun00026_ip = 70; continue _fun00025 }
 15:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 14;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.getSearchContext;
                zulu = mike.parseUserResults;
                entity = mike._limit;
                entity = tango.bind(report)(zulu, entity);
                mike['userSearchContext'] = entity;
 70:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(20);
        mike[0] = entity;
        entity = {};
        oscar = 'setLimit';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                tango = argFoo;
                entity = this;
                zulu = entity.userSearchContext;
                entity['_limit'] = tango;
                mike = null;
                if(!(mike != zulu)) { _fun00028_ip = 35; continue _fun00027 }
 24:
                mike = zulu.setLimit;
                mike = mike.bind(zulu)(tango);
 35:
                mike = entity._userResults;
                zulu = mike.length;
                mike = entity._limit;
                if(!(zulu > mike)) { _fun00028_ip = 74; continue _fun00027 }
 56:
                zulu = entity._userResults;
                mike = entity._limit;
                zulu['length'] = mike;
 74:
                mike = entity._groupDMResults;
                zulu = mike.length;
                mike = entity._limit;
                if(!(zulu > mike)) { _fun00028_ip = 113; continue _fun00027 }
 95:
                zulu = entity._groupDMResults;
                mike = entity._limit;
                zulu['length'] = mike;
 113:
                mike = entity._textChannelResults;
                zulu = mike.length;
                mike = entity._limit;
                if(!(zulu > mike)) { _fun00028_ip = 152; continue _fun00027 }
 134:
                zulu = entity._textChannelResults;
                mike = entity._limit;
                zulu['length'] = mike;
 152:
                mike = entity._voiceChannelResults;
                zulu = mike.length;
                mike = entity._limit;
                if(!(zulu > mike)) { _fun00028_ip = 191; continue _fun00027 }
 173:
                zulu = entity._voiceChannelResults;
                mike = entity._limit;
                zulu['length'] = mike;
 191:
                mike = entity._guildResults;
                zulu = mike.length;
                mike = entity._limit;
                if(!(zulu > mike)) { _fun00028_ip = 230; continue _fun00027 }
 212:
                zulu = entity._guildResults;
                mike = entity._limit;
                zulu['length'] = mike;
 230:
                mike = entity._applicationResults;
                zulu = mike.length;
                mike = entity._limit;
                if(!(zulu > mike)) { _fun00028_ip = 269; continue _fun00027 }
 251:
                zulu = entity._applicationResults;
                mike = entity._limit;
                zulu['length'] = mike;
 269:
                mike = entity._linkResults;
                zulu = mike.length;
                mike = entity._limit;
                if(!(zulu > mike)) { _fun00028_ip = 308; continue _fun00027 }
 290:
                zulu = entity._linkResults;
                mike = entity._limit;
                zulu['length'] = mike;
 308:
                mike = entity._inAppNavigations;
                zulu = mike.length;
                mike = entity._limit;
                if(!(zulu > mike)) { _fun00028_ip = 347; continue _fun00027 }
 329:
                mike = entity._inAppNavigations;
                entity = entity._limit;
                mike['length'] = entity;
 347:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'setResultTypes';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                report = argFoo;
                mike = this;
                entity = null;
                zulu = entity != report;
                if(!zulu) { _fun00030_ip = 46; continue _fun00029 }
 15:
                zulu = global;
                zulu = zulu.Set;
                tango = zulu.prototype;
                tango = Object.create(tango, {constructor: {value: zulu}});
                golf = tango;
                oscar = report;
                zulu = new golf[zulu](oscar, report);
                entity = zulu instanceof Object ? zulu : tango;
 46:
                mike['resultTypes'] = entity;
                tango = mike._include;
                zulu = _closure1_slot15;
                zulu = zulu.USER;
                zulu = tango.bind(mike)(zulu);
                if(zulu) { _fun00030_ip = 85; continue _fun00029 }
 79:
                zulu = new Array(0);
                _fun00030_ip = 91; continue _fun00029;
 85:
                zulu = mike._userResults;
 91:
                mike['_userResults'] = zulu;
                tango = mike._include;
                zulu = _closure1_slot15;
                zulu = zulu.GROUP_DM;
                zulu = tango.bind(mike)(zulu);
                if(zulu) { _fun00030_ip = 127; continue _fun00029 }
 121:
                zulu = new Array(0);
                _fun00030_ip = 133; continue _fun00029;
 127:
                zulu = mike._groupDMResults;
 133:
                mike['_groupDMResults'] = zulu;
                tango = mike._include;
                zulu = _closure1_slot15;
                zulu = zulu.TEXT_CHANNEL;
                zulu = tango.bind(mike)(zulu);
                if(zulu) { _fun00030_ip = 169; continue _fun00029 }
 163:
                zulu = new Array(0);
                _fun00030_ip = 175; continue _fun00029;
 169:
                zulu = mike._textChannelResults;
 175:
                mike['_textChannelResults'] = zulu;
                tango = mike._include;
                zulu = _closure1_slot15;
                zulu = zulu.VOICE_CHANNEL;
                zulu = tango.bind(mike)(zulu);
                if(zulu) { _fun00030_ip = 211; continue _fun00029 }
 205:
                zulu = new Array(0);
                _fun00030_ip = 217; continue _fun00029;
 211:
                zulu = mike._voiceChannelResults;
 217:
                mike['_voiceChannelResults'] = zulu;
                tango = mike._include;
                zulu = _closure1_slot15;
                zulu = zulu.GUILD;
                zulu = tango.bind(mike)(zulu);
                if(zulu) { _fun00030_ip = 253; continue _fun00029 }
 247:
                zulu = new Array(0);
                _fun00030_ip = 259; continue _fun00029;
 253:
                zulu = mike._guildResults;
 259:
                mike['_guildResults'] = zulu;
                tango = mike._include;
                zulu = _closure1_slot15;
                zulu = zulu.APPLICATION;
                zulu = tango.bind(mike)(zulu);
                if(zulu) { _fun00030_ip = 295; continue _fun00029 }
 289:
                zulu = new Array(0);
                _fun00030_ip = 301; continue _fun00029;
 295:
                zulu = mike._applicationResults;
 301:
                mike['_applicationResults'] = zulu;
                tango = mike._include;
                zulu = _closure1_slot15;
                zulu = zulu.LINK;
                zulu = tango.bind(mike)(zulu);
                if(zulu) { _fun00030_ip = 337; continue _fun00029 }
 331:
                zulu = new Array(0);
                _fun00030_ip = 343; continue _fun00029;
 337:
                zulu = mike._linkResults;
 343:
                mike['_linkResults'] = zulu;
                zulu = mike._include;
                entity = _closure1_slot15;
                entity = entity.IN_APP_NAVIGATION;
                entity = zulu.bind(mike)(entity);
                if(entity) { _fun00030_ip = 379; continue _fun00029 }
 373:
                entity = new Array(0);
                _fun00030_ip = 385; continue _fun00029;
 379:
                entity = mike._inAppNavigations;
 385:
                mike['_inAppNavigations'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = '_include';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                mike = this;
                zulu = mike.resultTypes;
                entity = null;
                entity = entity == zulu;
                if(entity) { _fun00032_ip = 37; continue _fun00031 }
 18:
                tango = mike.resultTypes;
                zulu = tango.has;
                mike = argFoo;
                entity = zulu.bind(tango)(mike);
 37:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = '_isAsyncSearch';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            mike = zulu._include;
            entity = _closure1_slot15;
            entity = entity.USER;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'setOptions';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                oscar = argFoo;
                report = arguments[1];
                zulu = this;
                entity = undefined;
                if(!(report === entity)) { _fun00034_ip = 19; continue _fun00033 }
 17:
                report = false;
 19:
                tango = oscar;
                if(!report) { _fun00034_ip = 52; continue _fun00033 }
 25:
                report = {};
                options = zulu.options;
                verify = report;
                golf = copyDataProperties(verify, options);
                verify = report;
                options = oscar;
                oscar = copyDataProperties(verify, options);
                tango = report;
 52:
                zulu['options'] = tango;
                tango = zulu.options;
                report = tango.blacklist;
                tango = null;
                if(!(tango == report)) { _fun00034_ip = 83; continue _fun00033 }
 75:
                zulu['_userBlacklist'] = tango;
                _fun00034_ip = 148; continue _fun00033;
 83:
                tango = global;
                oscar = tango.Array;
                report = oscar.from;
                tango = zulu.options;
                tango = tango.blacklist;
                oscar = report.bind(oscar)(tango);
                report = oscar.map;
                tango = function(argFoo) {
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        report = argFoo;
                        entity = report.startsWith;
                        tango = 'user:';
                        mike = entity.bind(report)(tango);
                        zulu = '';
                        entity = zulu;
                        if(!mike) { _fun00036_ip = 41; continue _fun00035 }
 30:
                        mike = report.replace;
                        entity = mike.bind(report)(tango, zulu);
 41:
                        return entity;
                    }
                };
                report = report.bind(oscar)(tango);
                tango = report.filter;
                mike = function(argFoo) {
                    mike = '';
                    entity = argFoo;
                    entity = mike !== entity;
                    return entity;
                };
                mike = tango.bind(report)(mike);
                zulu['_userBlacklist'] = mike;
 148:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'search';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                tango = argFoo;
                mike = this;
                var _closure3_slot0 = mike;
                var _closure3_slot1 = tango;
                zulu = argBar;
                var _closure3_slot2 = zulu;
                mike['query'] = tango;
                zulu = tango.trim;
                tango = zulu.bind(tango)();
                zulu = '';
                if(!(zulu !== tango)) { _fun00038_ip = 142; continue _fun00037 }
 47:
                zulu = mike.options;
                zulu = zulu.frecencyBoosters;
                if(zulu) { _fun00038_ip = 81; continue _fun00037 }
 61:
                zulu = global;
                tango = zulu.Promise;
                zulu = tango.resolve;
                tango = zulu.bind(tango)();
                _fun00038_ip = 122; continue _fun00037;
 81:
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 15;
                report = report[zulu];
                zulu = undefined;
                zulu = oscar.bind(zulu)(report);
                report = zulu.FrecencyUserSettingsActionCreators;
                zulu = report.loadIfNecessary;
                tango = zulu.bind(report)();
 122:
                zulu = tango.finally;
                entity = function() {
                    _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                        zulu = _closure3_slot0;
                        oscar = zulu.queryUsers;
                        report = _closure3_slot1;
                        tango = _closure3_slot2;
                        entity = zulu._limit;
                        entity = oscar.bind(zulu)(report, tango, entity);
                        tango = zulu.queryGroupDMs;
                        entity = zulu._limit;
                        entity = tango.bind(zulu)(report, entity);
                        zulu['_groupDMResults'] = entity;
                        tango = zulu.queryTextChannels;
                        entity = zulu._limit;
                        entity = tango.bind(zulu)(report, entity);
                        zulu['_textChannelResults'] = entity;
                        tango = zulu.queryVoiceChannels;
                        entity = zulu._limit;
                        entity = tango.bind(zulu)(report, entity);
                        zulu['_voiceChannelResults'] = entity;
                        tango = zulu.queryGuilds;
                        entity = zulu._limit;
                        entity = tango.bind(zulu)(report, entity);
                        zulu['_guildResults'] = entity;
                        tango = zulu.queryApplications;
                        entity = zulu._limit;
                        entity = tango.bind(zulu)(report, entity);
                        zulu['_applicationResults'] = entity;
                        tango = zulu.queryInAppNavigations;
                        entity = zulu._limit;
                        entity = tango.bind(zulu)(report, entity);
                        zulu['_inAppNavigations'] = entity;
                        entity = zulu._isAsyncSearch;
                        entity = entity.bind(zulu)();
                        if(entity) { _fun00040_ip = 213; continue _fun00039 }
 197:
                        zulu = _closure3_slot0;
                        entity = zulu.updateAllResults;
                        entity = entity.bind(zulu)();
                        _fun00040_ip = 268; continue _fun00039;
 213:
                        entity = global;
                        tango = entity.clearTimeout;
                        mike = _closure3_slot0;
                        zulu = mike._asyncTimeout;
                        report = undefined;
                        zulu = tango.bind(report)(zulu);
                        tango = entity.setTimeout;
                        zulu = mike.updateAllResults;
                        entity = 300;
                        entity = tango.bind(report)(zulu, entity);
                        mike['_asyncTimeout'] = entity;
 268:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity);
                entity = undefined;
                return entity;
 142:
                entity = mike.clear;
                entity = entity.bind(mike)();
                entity = mike.updateAllResults;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'clear';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                mike = this;
                zulu = mike.userSearchContext;
                entity = null;
                if(!(entity != zulu)) { _fun00042_ip = 25; continue _fun00041 }
 15:
                entity = zulu.clearQuery;
                entity = entity.bind(zulu)();
 25:
                entity = new Array(0);
                mike['results'] = entity;
                entity = new Array(0);
                mike['_userResults'] = entity;
                entity = new Array(0);
                mike['_groupDMResults'] = entity;
                entity = new Array(0);
                mike['_textChannelResults'] = entity;
                entity = new Array(0);
                mike['_voiceChannelResults'] = entity;
                entity = new Array(0);
                mike['_guildResults'] = entity;
                entity = new Array(0);
                mike['_applicationResults'] = entity;
                entity = new Array(0);
                mike['_linkResults'] = entity;
                entity = new Array(0);
                mike['_inAppNavigations'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'clean';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            mike = this;
            entity = mike.clear;
            entity = entity.bind(mike)();
            entity = mike.destroy;
            entity = entity.bind(mike)();
            entity = '';
            mike['query'] = entity;
            entity = mike.updateAllResults;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'pause';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                entity = this;
                mike = entity.userSearchContext;
                tango = null;
                entity = tango == mike;
                if(entity) { _fun00044_ip = 28; continue _fun00043 }
 18:
                zulu = mike.unsubscribe;
                entity = tango == zulu;
 28:
                if(entity) { _fun00044_ip = 41; continue _fun00043 }
 31:
                entity = mike.unsubscribe;
                entity = entity.bind(mike)();
 41:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'resume';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                entity = this;
                mike = entity.userSearchContext;
                tango = null;
                entity = tango == mike;
                if(entity) { _fun00046_ip = 28; continue _fun00045 }
 18:
                zulu = mike.subscribe;
                entity = tango == zulu;
 28:
                if(entity) { _fun00046_ip = 41; continue _fun00045 }
 31:
                entity = mike.subscribe;
                entity = entity.bind(mike)();
 41:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'destroy';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                mike = this;
                tango = mike.userSearchContext;
                entity = null;
                if(!(entity != tango)) { _fun00048_ip = 31; continue _fun00047 }
 15:
                zulu = tango.destroy;
                zulu = zulu.bind(tango)();
                mike['userSearchContext'] = entity;
 31:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'queryTextChannels';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                report = this;
                tango = report._include;
                zulu = _closure1_slot15;
                zulu = zulu.TEXT_CHANNEL;
                zulu = tango.bind(report)(zulu);
                if(zulu) { _fun00050_ip = 38; continue _fun00049 }
 32:
                zulu = new Array(0);
                return zulu;
 38:
                golf = _closure1_slot21;
                zulu = _closure1_slot15;
                oscar = zulu.TEXT_CHANNEL;
                tango = report.options;
                zulu = undefined;
                tango = golf.bind(zulu)(oscar, tango);
                report = report.options;
                report = report.blacklist;
                var _closure3_slot0 = report;
                oscar = null;
                golf = oscar != report;
                report = undefined;
                if(!golf) { _fun00050_ip = 96; continue _fun00049 }
 91:
                report = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.has;
                    entity = argFoo;
                    report = entity.id;
                    entity = global;
                    entity = entity.HermesInternal;
                    tango = entity.concat;
                    entity = 'channel:';
                    entity = tango.bind(entity)(report);
                    entity = mike.bind(zulu)(entity);
                    entity = !entity;
                    return entity;
                };
 96:
                mike = _closure1_slot1;
                golf = _closure1_slot2;
                entity = 16;
                entity = golf[entity];
                zulu = mike.bind(zulu)(entity);
                mike = zulu.queryChannels;
                entity = {};
                golf = argFoo;
                entity['query'] = golf;
                entity['guildId'] = oscar;
                oscar = argBar;
                entity['limit'] = oscar;
                oscar = true;
                entity['fuzzy'] = oscar;
                entity['filter'] = report;
                entity['boosters'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'queryVoiceChannels';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                entity = this;
                zulu = entity._include;
                mike = _closure1_slot15;
                mike = mike.VOICE_CHANNEL;
                mike = zulu.bind(entity)(mike);
                if(mike) { _fun00052_ip = 36; continue _fun00051 }
 30:
                mike = new Array(0);
                return mike;
 36:
                mike = entity.options;
                oscar = mike.voiceChannelGuildFilter;
                tango = _closure1_slot21;
                mike = _closure1_slot15;
                mike = mike.VOICE_CHANNEL;
                entity = entity.options;
                zulu = undefined;
                tango = tango.bind(zulu)(mike, entity);
                mike = _closure1_slot1;
                golf = _closure1_slot2;
                entity = 16;
                entity = golf[entity];
                zulu = mike.bind(zulu)(entity);
                mike = zulu.queryChannels;
                entity = {};
                golf = argFoo;
                entity['query'] = golf;
                entity['guildId'] = oscar;
                oscar = argBar;
                entity['limit'] = oscar;
                oscar = true;
                entity['fuzzy'] = oscar;
                report = _closure1_slot12;
                entity['type'] = report;
                entity['boosters'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[13] = entity;
        entity = {};
        oscar = 'queryGuilds';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                report = this;
                tango = report._include;
                zulu = _closure1_slot15;
                zulu = zulu.GUILD;
                zulu = tango.bind(report)(zulu);
                if(zulu) { _fun00054_ip = 38; continue _fun00053 }
 32:
                zulu = new Array(0);
                return zulu;
 38:
                golf = _closure1_slot21;
                zulu = _closure1_slot15;
                oscar = zulu.GUILD;
                tango = report.options;
                zulu = undefined;
                tango = golf.bind(zulu)(oscar, tango);
                report = report.options;
                oscar = report.blacklist;
                var _closure3_slot0 = oscar;
                report = null;
                oscar = report != oscar;
                report = undefined;
                if(!oscar) { _fun00054_ip = 96; continue _fun00053 }
 91:
                report = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.has;
                    entity = argFoo;
                    report = entity.id;
                    entity = global;
                    entity = entity.HermesInternal;
                    tango = entity.concat;
                    entity = 'guild:';
                    entity = tango.bind(entity)(report);
                    entity = mike.bind(zulu)(entity);
                    entity = !entity;
                    return entity;
                };
 96:
                mike = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 16;
                entity = oscar[entity];
                zulu = mike.bind(zulu)(entity);
                mike = zulu.queryGuilds;
                entity = {};
                oscar = argFoo;
                entity['query'] = oscar;
                oscar = argBar;
                entity['limit'] = oscar;
                oscar = true;
                entity['fuzzy'] = oscar;
                entity['filter'] = report;
                entity['boosters'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[14] = entity;
        entity = {};
        oscar = 'queryUsers';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                oscar = argFoo;
                offset = argBar;
                entity = this;
                report = entity.userSearchContext;
                mike = null;
                if(!(mike != report)) { _fun00056_ip = 168; continue _fun00055 }
 24:
                zulu = entity._include;
                mike = _closure1_slot15;
                mike = mike.USER;
                mike = zulu.bind(entity)(mike);
                if(!mike) { _fun00056_ip = 168; continue _fun00055 }
 51:
                mike = entity.options;
                tango = mike.userFilters;
                verify = undefined;
                if(!(verify !== offset)) { _fun00056_ip = 104; continue _fun00055 }
 68:
                zulu = _closure1_slot1;
                options = _closure1_slot2;
                mike = 17;
                mike = options[mike];
                options = zulu.bind(verify)(mike);
                zulu = options.requestMembers;
                mike = 100;
                mike = zulu.bind(options)(offset, oscar, mike);
 104:
                zulu = report.setLimit;
                mike = argBaz;
                mike = zulu.bind(report)(mike);
                zulu = report.setQuery;
                romeo = entity._userBlacklist;
                options = _closure1_slot21;
                golf = _closure1_slot15;
                golf = golf.USER;
                entity = entity.options;
                yankee = options.bind(verify)(golf, entity);
                kilo = report;
                backup = oscar;
                foxtrot = tango;
                entity = kilo[zulu](backup, foxtrot, romeo, yankee, offset);
 168:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[15] = entity;
        entity = {};
        oscar = 'queryGroupDMs';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                zulu = this;
                report = zulu._include;
                tango = _closure1_slot15;
                tango = tango.GROUP_DM;
                tango = report.bind(zulu)(tango);
                if(tango) { _fun00058_ip = 38; continue _fun00057 }
 32:
                tango = new Array(0);
                return tango;
 38:
                tango = zulu.options;
                oscar = tango.blacklist;
                var _closure3_slot0 = oscar;
                golf = _closure1_slot21;
                tango = _closure1_slot15;
                report = tango.GROUP_DM;
                tango = zulu.options;
                zulu = undefined;
                tango = golf.bind(zulu)(report, tango);
                report = null;
                oscar = report != oscar;
                report = undefined;
                if(!oscar) { _fun00058_ip = 96; continue _fun00057 }
 91:
                report = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.has;
                    entity = argFoo;
                    report = entity.id;
                    entity = global;
                    entity = entity.HermesInternal;
                    tango = entity.concat;
                    entity = 'channel:';
                    entity = tango.bind(entity)(report);
                    entity = mike.bind(zulu)(entity);
                    entity = !entity;
                    return entity;
                };
 96:
                mike = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 16;
                entity = oscar[entity];
                zulu = mike.bind(zulu)(entity);
                mike = zulu.queryGroupDMs;
                entity = {};
                oscar = argFoo;
                entity['query'] = oscar;
                oscar = argBar;
                entity['limit'] = oscar;
                oscar = true;
                entity['fuzzy'] = oscar;
                entity['filter'] = report;
                entity['boosters'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[16] = entity;
        entity = {};
        oscar = 'queryApplications';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                tango = this;
                zulu = tango._include;
                entity = _closure1_slot15;
                entity = entity.APPLICATION;
                entity = zulu.bind(tango)(entity);
                if(entity) { _fun00060_ip = 36; continue _fun00059 }
 30:
                entity = new Array(0);
                _fun00060_ip = 93; continue _fun00059;
 36:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 16;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.queryApplications;
                mike = {};
                report = argFoo;
                mike['query'] = report;
                report = argBar;
                mike['limit'] = report;
                report = true;
                mike['fuzzy'] = report;
                entity = zulu.bind(tango)(mike);
 93:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[17] = entity;
        entity = {};
        oscar = 'queryLink';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                foxtrot = this;
                options = argFoo;
                report = undefined;
                verify = undefined;
                offset = undefined;
                zulu = undefined;
                mike = undefined;
                oscar = undefined;
                golf = undefined;
                entity = undefined;
                romeo = foxtrot._include;
                yankee = _closure1_slot15;
                yankee = yankee.LINK;
                yankee = romeo.bind(foxtrot)(yankee);
                if(yankee) { _fun00062_ip = 55; continue _fun00061 }
 49:
                yankee = new Array(0);
                return yankee;
 55:
                romeo = _closure1_slot1;
                foxtrot = _closure1_slot2;
                yankee = 18;
                yankee = foxtrot[yankee];
                romeo = romeo.bind(report)(yankee);
                yankee = romeo.sanitizeUrl;
                offset = yankee.bind(romeo)(options);
 86: // try_start_0
                options = global;
                romeo = options.URL;
                backup = offset;
                yankee = romeo.prototype;
                yankee = Object.create(yankee, {constructor: {value: romeo}});
                kilo = yankee;
                offset = new kilo[romeo](backup, foxtrot);
                verify = offset instanceof Object ? offset : yankee;
 117: // try_end0
                zulu = verify;
                mike = verify.pathname;
                verify = verify.hostname;
                oscar = verify;
                yankee = '';
                if(!(report !== verify)) { _fun00062_ip = 146; continue _fun00061 }
 143:
                yankee = oscar;
 146:
                golf = zulu.host;
                offset = _closure1_slot1;
                verify = _closure1_slot2;
                oscar = 19;
                verify = verify[oscar];
                offset = offset.bind(report)(verify);
                verify = offset.isDiscordHostname;
                verify = verify.bind(offset)(yankee);
                zulu = verify;
                if(verify) { _fun00062_ip = 210; continue _fun00061 }
 189:
                options = options.window;
                options = options.location;
                options = options.host;
                zulu = options === golf;
 210:
                entity = zulu;
                golf = mike;
                zulu = null;
                if(!(zulu !== golf)) { _fun00062_ip = 259; continue _fun00061 }
 222:
                if(!entity) { _fun00062_ip = 259; continue _fun00061 }
 225:
                zulu = _closure1_slot1;
                entity = _closure1_slot2;
                entity = entity[oscar];
                report = zulu.bind(report)(entity);
                zulu = report.isAppRoute;
                entity = mike;
                entity = zulu.bind(report)(entity);
                if(entity) { _fun00062_ip = 265; continue _fun00061 }
 259:
                entity = new Array(0);
                _fun00062_ip = 322; continue _fun00061;
 265:
                zulu = {};
                report = _closure1_slot15;
                report = report.LINK;
                zulu['type'] = report;
                report = _closure1_slot9;
                tango = report.fromPath;
                mike = tango.bind(report)(mike);
                zulu['record'] = mike;
                mike = 1;
                zulu['score'] = mike;
                mike = new Array(1);
                mike[0] = zulu;
                entity = mike;
 322:
                return entity;
 324: // catch_target0
                CatchBlockStart(arg_register=0);
                entity = new Array(0);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[18] = entity;
        entity = {};
        oscar = 'queryInAppNavigations';
        entity['key'] = oscar;
        report = function(argFoo, argBar) { // Original name: value
            _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                tango = this;
                zulu = tango._include;
                entity = _closure1_slot15;
                entity = entity.IN_APP_NAVIGATION;
                entity = zulu.bind(tango)(entity);
                if(entity) { _fun00064_ip = 36; continue _fun00063 }
 30:
                entity = new Array(0);
                _fun00064_ip = 93; continue _fun00063;
 36:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 16;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.queryInAppNavigations;
                mike = {};
                report = argFoo;
                mike['query'] = report;
                report = argBar;
                mike['limit'] = report;
                report = true;
                mike['fuzzy'] = report;
                entity = zulu.bind(tango)(mike);
 93:
                return entity;
            }
        };
        entity['value'] = report;
        mike[19] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/autocompleter/Autocompleter.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();