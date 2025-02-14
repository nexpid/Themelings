// app/modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AutoCompleteResultTypes;
    var _closure1_slot4 = golf;
    tango = tango.ChannelTypes;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forums/native/composer/horizontal_autocomplete/hooks/useHorizontalAutocompleteResults.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useHorizontalAutocompleteResults
        entity = argFoo;
        zulu = entity.channel;
        var _closure2_slot0 = zulu;
        mike = entity.selection;
        var _closure2_slot1 = mike;
        yankee = entity.text;
        var _closure2_slot2 = yankee;
        golf = _closure1_slot3;
        oscar = golf.useState;
        entity = new Array(0);
        entity = oscar.bind(golf)(entity);
        romeo = _closure1_slot2;
        verify = undefined;
        oscar = 2;
        report = romeo.bind(verify)(entity, oscar);
        entity = 0;
        options = report[entity];
        var _closure2_slot3 = options;
        offset = 1;
        report = report[offset];
        var _closure2_slot4 = report;
        foxtrot = golf.useMemo;
        report = new Array(1);
        report[0] = zulu;
        zulu = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.getAutocompleteOptions;
            mike = _closure2_slot0;
            entity = false;
            entity = zulu.bind(tango)(mike, entity, entity);
            return entity;
        };
        report = foxtrot.bind(golf)(zulu, report);
        var _closure2_slot5 = report;
        foxtrot = golf.useState;
        zulu = {};
        zulu['text'] = yankee;
        backup = mike.start;
        zulu['selectionStart'] = backup;
        backup = mike.end;
        zulu['selectionEnd'] = backup;
        zulu = foxtrot.bind(golf)(zulu);
        zulu = romeo.bind(verify)(zulu, oscar);
        oscar = zulu[entity];
        entity = oscar.text;
        var _closure2_slot6 = entity;
        verify = oscar.selectionStart;
        var _closure2_slot7 = verify;
        oscar = oscar.selectionEnd;
        var _closure2_slot8 = oscar;
        zulu = zulu[offset];
        var _closure2_slot9 = zulu;
        offset = golf.useEffect;
        zulu = new Array(2);
        zulu[0] = yankee;
        zulu[1] = mike;
        mike = function() {
            mike = global;
            report = mike.setTimeout;
            tango = undefined;
            zulu = function() {
                zulu = _closure2_slot9;
                mike = {};
                tango = _closure2_slot2;
                mike['text'] = tango;
                entity = _closure2_slot1;
                tango = entity.start;
                mike['selectionStart'] = tango;
                entity = entity.end;
                mike['selectionEnd'] = entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = 16;
            mike = report.bind(tango)(zulu, mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = global;
                zulu = entity.clearTimeout;
                mike = _closure3_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            return entity;
        };
        mike = offset.bind(golf)(mike, zulu);
        zulu = golf.useMemo;
        mike = new Array(4);
        mike[0] = verify;
        mike[1] = oscar;
        mike[2] = entity;
        mike[3] = report;
        entity = function() {
            _fun87582: for(var _fun87582_ip = 0; ; ) switch(_fun87582_ip) {
 0:
                foxtrot = _closure2_slot7;
                var _closure3_slot2 = foxtrot;
                entity = _closure2_slot6;
                romeo = null;
                if(!(romeo != entity)) { _fun87582_ip = 349; continue _fun87582 }
 26:
                mike = _closure2_slot6;
                entity = mike.trim;
                entity = entity.bind(mike)();
                mike = entity.length;
                yankee = undefined;
                offset = 0;
                verify = 1;
                options = global;
                golf = 4;
                oscar = undefined;
                entity = undefined;
                if(!(offset !== mike)) { _fun87582_ip = 349; continue _fun87582 }
 71:
                tango = _closure1_slot0;
                mike = _closure1_slot1;
                mike = mike[golf];
                mike = tango.bind(yankee)(mike);
                report = mike.WHITESPACE_RE;
                tango = report.test;
                sizing = _closure2_slot6;
                mike = foxtrot - verify;
                mike = sizing[mike];
                mike = tango.bind(report)(mike);
                if(!(offset !== foxtrot)) { _fun87582_ip = 123; continue _fun87582 }
 120:
                if(!mike) { _fun87582_ip = 238; continue _fun87582 }
 123:
                report = _closure2_slot6;
                tango = report.slice;
                sizing = _closure2_slot8;
                mike = foxtrot;
                if(!(romeo != sizing)) { _fun87582_ip = 147; continue _fun87582 }
 143:
                mike = _closure2_slot8;
 147:
                tango = tango.bind(report)(foxtrot, mike);
                mike = tango[offset];
                var _closure3_slot0 = mike;
                mike = tango.slice;
                tango = mike.bind(tango)(verify);
                mike = tango.toLowerCase;
                mike = mike.bind(tango)();
                var _closure3_slot1 = mike;
                sizing = options.Object;
                report = sizing.keys;
                tango = _closure2_slot5;
                sizing = report.bind(sizing)(tango);
                report = sizing.find;
                tango = function(argFoo) {
                    _fun87583: for(var _fun87583_ip = 0; ; ) switch(_fun87583_ip) {
 0:
                        mike = _closure2_slot5;
                        entity = argFoo;
                        oscar = mike[entity];
                        entity = _closure3_slot0;
                        tango = undefined;
                        entity = tango !== entity;
                        if(!entity) { _fun87583_ip = 38; continue _fun87583 }
 30:
                        zulu = _closure3_slot1;
                        entity = tango !== zulu;
 38:
                        if(!entity) { _fun87583_ip = 66; continue _fun87583 }
 41:
                        report = oscar.matches;
                        tango = _closure3_slot0;
                        zulu = _closure3_slot1;
                        mike = _closure3_slot2;
                        entity = report.bind(oscar)(tango, zulu, mike);
 66:
                        return entity;
                    }
                };
                oscar = report.bind(sizing)(tango);
                entity = mike;
                report = entity;
                mike = foxtrot;
                tango = oscar;
                if(!(romeo == tango)) { _fun87582_ip = 264; continue _fun87582 }
 238:
                sizing = foxtrot - 1;
                _closure3_slot2 = sizing;
                foxtrot = sizing;
                tango = oscar;
                report = entity;
                mike = foxtrot;
                if(mike >= offset) { _fun87582_ip = 71; continue _fun87582 }
 264:
                entity = {};
                entity['query'] = report;
                entity['autocompleteType'] = tango;
                entity['autocompleteSelectionStart'] = mike;
                mike = {};
                tango = false;
                mike['includeEmojiPremiumUpsell'] = tango;
                tango = _closure1_slot5;
                report = tango.GUILD_FORUM;
                zulu = new Array(4);
                zulu[0] = report;
                report = tango.GUILD_MEDIA;
                zulu[1] = report;
                report = tango.GUILD_TEXT;
                zulu[2] = report;
                tango = tango.GUILD_ANNOUNCEMENT;
                zulu[3] = tango;
                mike['channelTypes'] = zulu;
                entity['queryOptions'] = mike;
                return entity;
 349:
                entity = {'query': null, 'autocompleteType': null, 'autocompleteSelectionStart': null};
                return entity;
            }
        };
        zulu = zulu.bind(golf)(entity, mike);
        offset = zulu.autocompleteType;
        var _closure2_slot10 = offset;
        mike = zulu.query;
        var _closure2_slot11 = mike;
        entity = zulu.queryOptions;
        var _closure2_slot12 = entity;
        zulu = zulu.autocompleteSelectionStart;
        verify = golf.useCallback;
        oscar = new Array(4);
        oscar[0] = offset;
        oscar[1] = mike;
        oscar[2] = entity;
        oscar[3] = report;
        entity = function(argFoo) {
            _fun87584: for(var _fun87584_ip = 0; ; ) switch(_fun87584_ip) {
 0:
                mike = _closure2_slot10;
                zulu = null;
                if(!(zulu != mike)) { _fun87584_ip = 21; continue _fun87584 }
 13:
                mike = _closure2_slot11;
                if(!(zulu == mike)) { _fun87584_ip = 38; continue _fun87584 }
 21:
                tango = _closure2_slot4;
                zulu = undefined;
                mike = new Array(0);
                mike = tango.bind(zulu)(mike);
                _fun87584_ip = 85; continue _fun87584;
 38:
                zulu = _closure2_slot5;
                mike = _closure2_slot10;
                oscar = zulu[mike];
                zulu = _closure2_slot4;
                report = oscar.queryResults;
                tango = _closure2_slot11;
                mike = _closure2_slot12;
                entity = argFoo;
                mike = report.bind(oscar)(tango, mike, entity);
                entity = undefined;
                entity = zulu.bind(entity)(mike);
 85:
                entity = undefined;
                return entity;
            }
        };
        entity = verify.bind(golf)(entity, oscar);
        var _closure2_slot13 = entity;
        verify = golf.useEffect;
        oscar = new Array(3);
        oscar[0] = offset;
        oscar[1] = entity;
        oscar[2] = report;
        report = function() {
            _fun87585: for(var _fun87585_ip = 0; ; ) switch(_fun87585_ip) {
 0:
                zulu = _closure2_slot10;
                mike = null;
                zulu = mike != zulu;
                report = null;
                if(!zulu) { _fun87585_ip = 54; continue _fun87585 }
 20:
                zulu = _closure2_slot5;
                oscar = mike == zulu;
                zulu = undefined;
                if(oscar) { _fun87585_ip = 51; continue _fun87585 }
 33:
                oscar = _closure2_slot5;
                tango = _closure2_slot10;
                tango = oscar[tango];
                zulu = tango.stores;
 51:
                report = zulu;
 54:
                if(!(mike == report)) { _fun87585_ip = 62; continue _fun87585 }
 58:
                mike = undefined;
                return mike;
 62:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 5;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                tango = mike.BatchedStoreListener;
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                golf = function() {
                    zulu = _closure2_slot13;
                    mike = undefined;
                    entity = false;
                    entity = zulu.bind(mike)(entity);
                    return entity;
                };
                verify = zulu;
                options = report;
                mike = new verify[tango](options, golf, oscar);
                tango = mike instanceof Object ? mike : zulu;
                var _closure3_slot0 = tango;
                zulu = tango.attach;
                mike = 'useHorizontalAutocompleteResults';
                mike = zulu.bind(tango)(mike);
                entity = function() {
                    mike = _closure3_slot0;
                    entity = mike.detach;
                    entity = entity.bind(mike)();
                    return entity;
                };
                return entity;
            }
        };
        report = verify.bind(golf)(report, oscar);
        oscar = golf.useEffect;
        report = new Array(1);
        report[0] = entity;
        entity = function() {
            zulu = _closure2_slot13;
            entity = undefined;
            mike = true;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        entity = oscar.bind(golf)(entity, report);
        entity = {};
        oscar = golf.useMemo;
        report = new Array(1);
        report[0] = options;
        tango = function() {
            zulu = _closure2_slot3;
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun87590: for(var _fun87590_ip = 0; ; ) switch(_fun87590_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.type;
                    entity = _closure1_slot4;
                    entity = entity.USER;
                    entity = zulu === entity;
                    if(entity) { _fun87590_ip = 42; continue _fun87590 }
 28:
                    tango = _closure1_slot4;
                    tango = tango.ROLE;
                    entity = zulu === tango;
 42:
                    if(entity) { _fun87590_ip = 59; continue _fun87590 }
 45:
                    tango = _closure1_slot4;
                    tango = tango.CHANNEL;
                    entity = zulu === tango;
 59:
                    if(entity) { _fun87590_ip = 76; continue _fun87590 }
 62:
                    mike = _closure1_slot4;
                    mike = mike.EMOJI;
                    entity = zulu === mike;
 76:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        tango = oscar.bind(golf)(tango, report);
        entity['results'] = tango;
        entity['autocompleteSelectionStart'] = zulu;
        entity['query'] = mike;
        return entity;
    };
    zulu['useHorizontalAutocompleteResults'] = mike;
    return entity;
})();