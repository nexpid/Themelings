// app/modules/search_v2/native/hooks/useChannelSearchTab.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: searchChannels
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = global;
        zulu = mike.Promise;
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        tango = function(argFoo) {
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 6;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.queryChannels;
            zulu = {'query': null, 'guildId': null, 'limit': 1000, 'allowEmptyQueries': true, 'type': null, 'fuzzy': false};
            golf = _closure2_slot0;
            zulu['query'] = golf;
            golf = _closure2_slot1;
            zulu['guildId'] = golf;
            oscar = _closure2_slot2;
            zulu['type'] = oscar;
            oscar = function() { // Original name: filter
                entity = true;
                return entity;
            };
            zulu['filter'] = oscar;
            tango = tango.bind(report)(zulu);
            zulu = tango.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.record;
                return entity;
            };
            zulu = zulu.bind(tango)(mike);
            mike = argFoo;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        report = mike;
        entity = new report[zulu](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    var _closure1_slot14 = entity;
    tango = global;
    offset = tango.Object;
    options = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = verify.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    options = oscar[golf];
    golf = argCorge;
    golf = golf.bind(entity)(options);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.createZustandStore;
    options = 3;
    options = oscar[options];
    options = report.bind(entity)(options);
    offset = options.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot5 = offset;
    options = options.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = verify.bind(entity)(options);
    var _closure1_slot7 = options;
    options = 5;
    options = oscar[options];
    options = report.bind(entity)(options);
    verify = options.getIsAutocompleteVisible;
    var _closure1_slot8 = verify;
    options = options.subscribeTextInputValue;
    var _closure1_slot9 = options;
    yankee = new Array(0);
    var _closure1_slot10 = yankee;
    offset = new Array(0);
    var _closure1_slot11 = offset;
    verify = tango.Object;
    options = verify.freeze;
    tango = {};
    tango['textChannels'] = yankee;
    tango['voiceChannels'] = offset;
    offset = null;
    tango['count'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot12 = tango;
    tango = function() {
        entity = _closure1_slot12;
        return entity;
    };
    tango = golf.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/hooks/useChannelSearchTab.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useChannelSearchTabCount
        options = argFoo;
        var _closure2_slot0 = options;
        tango = _closure1_slot0;
        report = _closure1_slot2;
        zulu = 7;
        zulu = report[zulu];
        report = undefined;
        tango = tango.bind(report)(zulu);
        zulu = tango.useIsChannelsTabVisible;
        zulu = zulu.bind(tango)(options);
        var _closure2_slot1 = zulu;
        oscar = _closure1_slot4;
        golf = oscar.useCallback;
        tango = function() {
            tango = _closure1_slot3;
            zulu = undefined;
            mike = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun113278: for(var _fun113278_ip = 0; ; ) switch(_fun113278_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun113278_ip = 321; continue _fun113278 }
 12:
                        options = argFoo;
                        mike = undefined;
                        golf = undefined;
                        verify = _closure1_slot8;
                        zulu = _closure2_slot0;
                        zulu = verify.bind(mike)(zulu);
                        if(zulu) { _fun113278_ip = 318; continue _fun113278 }
 44: // try_start_0
                        yankee = _closure1_slot14;
                        offset = options;
                        zulu = _closure2_slot0;
                        verify = zulu.guildId;
                        zulu = _closure1_slot5;
                        zulu = yankee.bind(mike)(offset, verify, zulu);
                        SaveGenerator(address=75);
 73:
                        return zulu;
 75:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=8);
                        if(verify) { _fun113278_ip = 272; continue _fun113278 }
 84:
                        golf = zulu;
                        offset = _closure1_slot14;
                        verify = options;
                        tango = _closure2_slot0;
                        options = tango.guildId;
                        tango = _closure1_slot6;
                        tango = offset.bind(mike)(verify, options, tango);
                        SaveGenerator(address=118);
 116:
                        return tango;
 118:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                        if(options) { _fun113278_ip = 269; continue _fun113278 }
 127:
                        verify = golf;
                        options = verify.map;
                        golf = function(argFoo) {
                            entity = {};
                            mike = argFoo;
                            entity['channel'] = mike;
                            return entity;
                        };
                        offset = options.bind(verify)(golf);
                        options = _closure1_slot0;
                        verify = _closure1_slot2;
                        golf = 8;
                        golf = verify[golf];
                        options = options.bind(mike)(golf);
                        golf = options.chain;
                        verify = golf.bind(options)(tango);
                        options = verify.map;
                        golf = function(argFoo) {
                            _fun113280: for(var _fun113280_ip = 0; ; ) switch(_fun113280_ip) {
 0:
                                zulu = argFoo;
                                entity = {};
                                entity['channel'] = zulu;
                                report = _closure1_slot7;
                                tango = report.lastMessageId;
                                mike = zulu.id;
                                mike = tango.bind(report)(mike);
                                tango = null;
                                if(!(tango == mike)) { _fun113280_ip = 44; continue _fun113280 }
 38:
                                mike = zulu.lastMessageId;
 44:
                                entity['lastMessageId'] = mike;
                                return entity;
                            }
                        };
                        options = options.bind(verify)(golf);
                        golf = options.sort;
                        report = function(argFoo, argBar) {
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 9;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.compare;
                            entity = argBar;
                            mike = entity.lastMessageId;
                            entity = argFoo;
                            entity = entity.lastMessageId;
                            entity = zulu.bind(tango)(mike, entity);
                            return entity;
                        };
                        golf = golf.bind(options)(report);
                        report = golf.value;
                        yankee = report.bind(golf)();
                        golf = offset.length;
                        report = yankee.length;
                        verify = golf + report;
                        options = _closure1_slot13;
                        golf = options.setState;
                        report = {};
                        report['textChannels'] = yankee;
                        report['voiceChannels'] = offset;
                        report['count'] = verify;
                        report = golf.bind(options)(report);
 267: // try_end0
                        _fun113278_ip = 318; continue _fun113278;
 269:
                        return tango;
 272:
                        return zulu;
 275: // catch_target0
                        CatchBlockStart(arg_register=2);
                        report = _closure1_slot13;
                        tango = report.setState;
                        zulu = {};
                        golf = _closure1_slot10;
                        zulu['textChannels'] = golf;
                        oscar = _closure1_slot11;
                        zulu['voiceChannels'] = oscar;
                        oscar = 0;
                        zulu['count'] = oscar;
                        zulu = tango.bind(report)(zulu);
 318:
                        return mike;
 321:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        report = tango.bind(report)();
        tango = new Array(1);
        tango[0] = options;
        tango = golf.bind(oscar)(report, tango);
        var _closure2_slot2 = tango;
        golf = oscar.useEffect;
        report = new Array(3);
        report[0] = options;
        report[1] = tango;
        report[2] = zulu;
        tango = function() {
            _fun113283: for(var _fun113283_ip = 0; ; ) switch(_fun113283_ip) {
 0:
                mike = _closure2_slot1;
                if(mike) { _fun113283_ip = 14; continue _fun113283 }
 10:
                mike = undefined;
                return mike;
 14:
                tango = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 8;
                zulu = report[zulu];
                report = undefined;
                golf = tango.bind(report)(zulu);
                oscar = golf.debounce;
                tango = _closure2_slot2;
                zulu = 250;
                tango = oscar.bind(golf)(tango, zulu);
                zulu = _closure1_slot9;
                mike = _closure2_slot0;
                entity = true;
                entity = zulu.bind(report)(mike, tango, entity);
                return entity;
            }
        };
        tango = golf.bind(oscar)(tango, report);
        report = oscar.useEffect;
        tango = function() {
            entity = function() {
                mike = _closure1_slot13;
                entity = mike.resetState;
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
            };
            return entity;
        };
        mike = new Array(0);
        mike = report.bind(oscar)(tango, mike);
        tango = _closure1_slot13;
        mike = tango.useField;
        entity = 'count';
        mike = mike.bind(tango)(entity);
        entity = new Array(2);
        entity[0] = zulu;
        entity[1] = mike;
        return entity;
    };
    zulu['default'] = tango;
    tango = function() { // Original name: useTextChannelSearchResults
        zulu = _closure1_slot13;
        mike = zulu.useField;
        entity = 'textChannels';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['useTextChannelSearchResults'] = tango;
    mike = function() { // Original name: useVoiceChannelSearchResults
        zulu = _closure1_slot13;
        mike = zulu.useField;
        entity = 'voiceChannels';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['useVoiceChannelSearchResults'] = mike;
    return entity;
})();