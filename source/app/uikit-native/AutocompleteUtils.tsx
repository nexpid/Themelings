// app/uikit-native/AutocompleteUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    romeo = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = golf;
    tango = function(argFoo, argBar) { // Original name: getMentionTextWithUser
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argBar;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 9;
            zulu = tango[zulu];
            tango = undefined;
            oscar = report.bind(tango)(zulu);
            report = oscar.hasSameRoleAsUsername;
            zulu = argFoo;
            zulu = report.bind(oscar)(zulu, mike);
            report = _closure1_slot8;
            if(zulu) { _fun00002_ip = 106; continue _fun00001 }
 50:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 10;
            entity = oscar[entity];
            zulu = zulu.bind(tango)(entity);
            entity = zulu.getUserTag;
            tango = entity.bind(zulu)(mike);
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            entity = '';
            entity = zulu.bind(entity)(report, tango);
            _fun00002_ip = 134; continue _fun00001;
 106:
            tango = mike.tag;
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = '';
            entity = zulu.bind(mike)(report, tango);
 134:
            return entity;
        }
    };
    var _closure1_slot12 = tango;
    entity = function() { // Original name: AutocompleteFormDivider
        mike = _closure1_slot11;
        tango = undefined;
        report = mike.bind(tango)();
        zulu = _closure1_slot9;
        mike = _closure1_slot1;
        oscar = _closure1_slot2;
        entity = 11;
        entity = oscar[entity];
        mike = mike.bind(tango)(entity);
        entity = {};
        report = report.itemDivider;
        entity['style'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.StyleSheet;
    options = 2;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.AutoCompleteResultTypes;
    var _closure1_slot3 = options;
    options = 3;
    options = golf[options];
    options = oscar.bind(entity)(options);
    verify = options.AUTOCOMPLETE_EMOJI_ROW_HEIGHT;
    var _closure1_slot4 = verify;
    options = options.AUTOCOMPLETE_ROW_HEIGHT;
    var _closure1_slot5 = options;
    options = 4;
    options = golf[options];
    options = oscar.bind(entity)(options);
    verify = options.CHANNEL_SENTINEL;
    var _closure1_slot6 = verify;
    verify = options.EMOJI_SENTINEL;
    var _closure1_slot7 = verify;
    options = options.MENTION_SENTINEL;
    var _closure1_slot8 = options;
    options = 5;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot9 = options;
    report = report.hairlineWidth;
    var _closure1_slot10 = report;
    report = 6;
    report = golf[report];
    verify = oscar.bind(entity)(report);
    options = verify.createStyles;
    report = {};
    offset = {};
    yankee = 16;
    offset['marginLeft'] = yankee;
    yankee = 7;
    yankee = golf[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MODIFIER_ACCENT;
    offset['backgroundColor'] = yankee;
    report['itemDivider'] = offset;
    report = options.bind(verify)(report);
    var _closure1_slot11 = report;
    report = 12;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'uikit-native/AutocompleteUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            mike = argBar;
            zulu = null;
            oscar = zulu == entity;
            tango = undefined;
            if(oscar) { _fun00004_ip = 35; continue _fun00003 }
 17:
            entity = entity[mike];
            zulu = zulu == entity;
            tango = undefined;
            if(zulu) { _fun00004_ip = 35; continue _fun00003 }
 30:
            tango = entity.type;
 35:
            entity = _closure1_slot3;
            entity = entity.EMOJI;
            if(!(tango !== entity)) { _fun00004_ip = 58; continue _fun00003 }
 52:
            tango = _closure1_slot5;
            _fun00004_ip = 62; continue _fun00003;
 58:
            tango = _closure1_slot4;
 62:
            entity = {};
            entity['length'] = tango;
            tango = mike * tango;
            report = global;
            golf = report.Math;
            oscar = golf.max;
            report = 1;
            report = mike - report;
            zulu = _closure1_slot10;
            report = report * zulu;
            zulu = 0;
            zulu = oscar.bind(golf)(zulu, report);
            zulu = tango + zulu;
            entity['offset'] = zulu;
            entity['index'] = mike;
            return entity;
        }
    };
    zulu['getItemLayout'] = report;
    report = function(argFoo, argBar) { // Original name: getAutocompleteResultText
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tango = entity.type;
            zulu = _closure1_slot3;
            zulu = zulu.USER;
            if(!(zulu !== tango)) { _fun00006_ip = 442; continue _fun00005 }
 28:
            zulu = _closure1_slot3;
            zulu = zulu.GLOBAL;
            if(!(zulu !== tango)) { _fun00006_ip = 435; continue _fun00005 }
 45:
            zulu = _closure1_slot3;
            zulu = zulu.ROLE;
            if(!(zulu !== tango)) { _fun00006_ip = 401; continue _fun00005 }
 62:
            zulu = _closure1_slot3;
            zulu = zulu.CHANNEL;
            if(!(zulu !== tango)) { _fun00006_ip = 270; continue _fun00005 }
 79:
            zulu = _closure1_slot3;
            zulu = zulu.EMOJI;
            if(!(zulu !== tango)) { _fun00006_ip = 231; continue _fun00005 }
 96:
            zulu = _closure1_slot3;
            zulu = zulu.EMOJI_PREMIUM_UPSELL;
            if(!(zulu !== tango)) { _fun00006_ip = 225; continue _fun00005 }
 110:
            zulu = _closure1_slot3;
            zulu = zulu.SLASH;
            if(!(zulu !== tango)) { _fun00006_ip = 225; continue _fun00005 }
 124:
            zulu = _closure1_slot3;
            zulu = zulu.CHOICE;
            if(!(zulu !== tango)) { _fun00006_ip = 190; continue _fun00005 }
 138:
            zulu = _closure1_slot3;
            zulu = zulu.STICKER;
            if(!(zulu !== tango)) { _fun00006_ip = 184; continue _fun00005 }
 152:
            zulu = _closure1_slot3;
            zulu = zulu.CHOICE_LOADING;
            if(!(zulu !== tango)) { _fun00006_ip = 184; continue _fun00005 }
 166:
            zulu = _closure1_slot3;
            zulu = zulu.LABEL;
            if(!(zulu !== tango)) { _fun00006_ip = 184; continue _fun00005 }
 180:
            zulu = undefined;
            return zulu;
 184:
            zulu = '';
            return zulu;
 190:
            zulu = entity.choice;
            report = zulu.displayName;
            zulu = global;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = '';
            zulu = tango.bind(zulu)(report);
            return zulu;
 225:
            zulu = '';
            return zulu;
 231:
            golf = _closure1_slot7;
            oscar = entity.name;
            zulu = global;
            zulu = zulu.HermesInternal;
            report = zulu.concat;
            tango = '';
            zulu = ':';
            zulu = report.bind(tango)(golf, oscar, zulu);
            return zulu;
 270:
            tango = entity.channel;
            zulu = tango.isThread;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun00006_ip = 327; continue _fun00005 }
 288:
            oscar = _closure1_slot6;
            zulu = entity.channel;
            report = zulu.name;
            zulu = global;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = '';
            zulu = tango.bind(zulu)(oscar, report);
            _fun00006_ip = 399; continue _fun00005;
 327:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 8;
            report = report[tango];
            tango = undefined;
            oscar = oscar.bind(tango)(report);
            report = oscar.escapeChannelName;
            tango = entity.channel;
            tango = tango.name;
            golf = report.bind(oscar)(tango);
            tango = global;
            tango = tango.HermesInternal;
            oscar = tango.concat;
            report = '#"';
            tango = '"';
            zulu = oscar.bind(report)(golf, tango);
 399:
            return zulu;
 401:
            oscar = _closure1_slot8;
            report = entity.name;
            zulu = global;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = '';
            zulu = tango.bind(zulu)(oscar, report);
            return zulu;
 435:
            zulu = entity.text;
            return zulu;
 442:
            tango = _closure1_slot12;
            zulu = entity.user;
            mike = undefined;
            entity = argBar;
            entity = tango.bind(mike)(entity, zulu);
            return entity;
        }
    };
    zulu['getAutocompleteResultText'] = report;
    zulu['getMentionTextWithUser'] = tango;
    tango = function() {
        tango = _closure1_slot9;
        zulu = _closure1_slot13;
        mike = undefined;
        entity = {};
        entity = tango.bind(mike)(zulu, entity);
        return entity;
    };
    zulu['getItemSeparator'] = tango;
    tango = function(argFoo) {
        mike = argFoo;
        entity = 0;
        entity = mike[entity];
        return entity;
    };
    zulu['getPrefix'] = tango;
    mike = function(argFoo) {
        zulu = argFoo;
        mike = zulu.slice;
        entity = 1;
        mike = mike.bind(zulu)(entity);
        entity = mike.toLowerCase;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['getQuery'] = mike;
    return entity;
})();