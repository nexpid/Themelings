// app/modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.SafetyWarningTypes;
    var _closure1_slot2 = tango;
    tango = 1;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    options = options.Millis;
    options = options.HOUR;
    options = tango * options;
    var _closure1_slot3 = options;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Millis;
    golf = tango.HOUR;
    tango = 12;
    tango = tango * golf;
    var _closure1_slot4 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/self_mod/inappropriate_conversation/hooks/useShouldShowSafetyToolsButtonTooltipForChannel.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useSafetyToolsButtonTooltipForChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            tango = _closure1_slot0;
            options = _closure1_slot1;
            entity = 2;
            mike = options[entity];
            entity = undefined;
            report = tango.bind(entity)(mike);
            mike = report.useInappropriateConversationSafetyToolsWarningForChannel;
            report = mike.bind(report)(golf);
            mike = 3;
            mike = options[mike];
            oscar = tango.bind(entity)(mike);
            mike = oscar.useInappropriateConversationWarningsForChannel;
            oscar = mike.bind(oscar)(golf);
            mike = 4;
            mike = options[mike];
            tango = tango.bind(entity)(mike);
            mike = tango.useShouldShowInitialSafetyToolsButtonTooltip;
            mike = mike.bind(tango)(golf);
            tango = null;
            if(!(tango != report)) { _fun00002_ip = 397; continue _fun00001 }
 96:
            if(mike) { _fun00002_ip = 397; continue _fun00001 }
 102:
            report = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 5;
            mike = golf[mike];
            report = report.bind(entity)(mike);
            mike = report.shouldShowTakeoverForWarnings;
            mike = mike.bind(report)(oscar);
            if(mike) { _fun00002_ip = 397; continue _fun00001 }
 139:
            report = oscar.some;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure1_slot2;
                entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                entity = mike === entity;
                return entity;
            };
            mike = report.bind(oscar)(mike);
            golf = oscar.filter;
            report = function(argFoo) {
                entity = argFoo;
                mike = entity.dismiss_timestamp;
                entity = null;
                entity = entity != mike;
                return entity;
            };
            options = golf.bind(oscar)(report);
            golf = options.sort;
            report = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argBar;
                    mike = entity.dismiss_timestamp;
                    entity = argFoo;
                    entity = entity.dismiss_timestamp;
                    mike = mike < entity;
                    entity = 1;
                    if(!mike) { _fun00004_ip = 34; continue _fun00003 }
 28:
                    entity = -1;
 34:
                    return entity;
                }
            };
            golf = golf.bind(options)(report);
            options = golf.length;
            report = 1;
            if(!(!(options < report))) { _fun00002_ip = 397; continue _fun00001 }
 207:
            report = 0;
            report = golf[report];
            yankee = report.dismiss_timestamp;
            golf = mike;
            if(!(golf === entity)) { _fun00002_ip = 228; continue _fun00001 }
 226:
            golf = false;
 228:
            report = tango == yankee;
            mike = true;
            if(report) { _fun00002_ip = 335; continue _fun00001 }
 237:
            report = global;
            options = report.Date;
            offset = options.prototype;
            offset = Object.create(offset, {constructor: {value: options}});
            foxtrot = offset;
            romeo = yankee;
            options = new foxtrot[options](romeo, yankee);
            offset = options instanceof Object ? options : offset;
            options = offset.getTime;
            options = options.bind(offset)();
            if(golf) { _fun00002_ip = 287; continue _fun00001 }
 281:
            golf = _closure1_slot4;
            _fun00002_ip = 291; continue _fun00001;
 287:
            golf = _closure1_slot3;
 291:
            golf = options + golf;
            report = report.Date;
            options = report.prototype;
            options = Object.create(options, {constructor: {value: report}});
            foxtrot = options;
            report = new foxtrot[report](romeo);
            options = report instanceof Object ? report : options;
            report = options.getTime;
            report = report.bind(options)();
            mike = report >= golf;
 335:
            if(!mike) { _fun00002_ip = 397; continue _fun00001 }
 338:
            report = oscar.filter;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.dismiss_timestamp;
                entity = null;
                entity = entity == mike;
                return entity;
            };
            report = report.bind(oscar)(mike);
            oscar = report.findLast;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure1_slot2;
                entity = entity.INAPPROPRIATE_CONVERSATION_TIER_1;
                entity = mike === entity;
                return entity;
            };
            mike = oscar.bind(report)(mike);
            if(!(tango == mike)) { _fun00002_ip = 395; continue _fun00001 }
 377:
            tango = report.findLast;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure1_slot2;
                entity = entity.INAPPROPRIATE_CONVERSATION_TIER_2;
                entity = mike === entity;
                return entity;
            };
            mike = tango.bind(report)(zulu);
 395:
            return mike;
 397:
            return entity;
        }
    };
    zulu['useSafetyToolsButtonTooltipForChannel'] = mike;
    return entity;
})();