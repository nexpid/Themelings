// app/modules/channel_list_v2/native/hooks/useSectionsWithVoiceSummary.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: areSectionsWithVoiceSummaryEqual
        _fun116077: for(var _fun116077_ip = 0; ; ) switch(_fun116077_ip) {
 0:
            offset = argFoo;
            verify = argBar;
            options = global;
            mike = options.Object;
            entity = mike.keys;
            golf = entity.bind(mike)(offset);
            mike = options.Object;
            entity = mike.keys;
            entity = entity.bind(mike)(verify);
            mike = golf.length;
            entity = entity.length;
            if(!(mike === entity)) { _fun116077_ip = 211; continue _fun116077 }
 57:
            entity = golf.length;
            oscar = 0;
            entity = oscar < entity;
            tango = 2;
            zulu = undefined;
            mike = null;
            if(!entity) { _fun116077_ip = 195; continue _fun116077 }
 81:
            yankee = golf[oscar];
            entity = options.Number;
            entity = entity.bind(zulu)(yankee);
            yankee = offset[entity];
            entity = verify[entity];
            if(!(mike != entity)) { _fun116077_ip = 207; continue _fun116077 }
 108:
            if(!(mike != yankee)) { _fun116077_ip = 207; continue _fun116077 }
 112:
            romeo = entity.category;
            if(!(mike != romeo)) { _fun116077_ip = 203; continue _fun116077 }
 121:
            foxtrot = yankee.category;
            romeo = entity.category;
            if(!(foxtrot === romeo)) { _fun116077_ip = 199; continue _fun116077 }
 135:
            foxtrot = _closure1_slot0;
            romeo = _closure1_slot1;
            romeo = romeo[tango];
            foxtrot = foxtrot.bind(zulu)(romeo);
            romeo = foxtrot.areArraysShallowEqual;
            yankee = yankee.activeVoiceChannels;
            entity = entity.activeVoiceChannels;
            entity = romeo.bind(foxtrot)(yankee, entity);
            if(entity) { _fun116077_ip = 183; continue _fun116077 }
 179:
            entity = false;
            return entity;
 183:
            oscar = oscar + 1;
            entity = golf.length;
            if(oscar < entity) { _fun116077_ip = 81; continue _fun116077 }
 195:
            entity = true;
            return entity;
 199:
            entity = false;
            return entity;
 203:
            entity = false;
            return entity;
 207:
            entity = false;
            return entity;
 211:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot4 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel_list_v2/native/hooks/useSectionsWithVoiceSummary.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useSectionsWithVoiceSummary
        mike = argFoo;
        zulu = mike.guildId;
        var _closure2_slot0 = zulu;
        verify = mike.sections;
        var _closure2_slot1 = verify;
        zulu = mike.guildChannels;
        var _closure2_slot2 = zulu;
        options = mike.guildChannelsVersion;
        golf = mike.optInEnabled;
        var _closure2_slot3 = golf;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        oscar = report.bind(zulu)(tango);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot3;
        tango = new Array(2);
        tango[0] = zulu;
        zulu = _closure1_slot2;
        tango[1] = zulu;
        zulu = new Array(3);
        zulu[0] = verify;
        zulu[1] = options;
        zulu[2] = golf;
        offset = _closure1_slot4;
        romeo = function() {
            _fun116079: for(var _fun116079_ip = 0; ; ) switch(_fun116079_ip) {
 0:
                entity = {};
                tango = _closure1_slot3;
                zulu = tango.getVoiceStates;
                mike = _closure2_slot0;
                romeo = zulu.bind(tango)(mike);
                mike = _closure2_slot1;
                mike = mike.length;
                yankee = 0;
                mike = yankee < mike;
                offset = undefined;
                verify = 6;
                options = null;
                golf = 5;
                oscar = 4;
                report = 0;
                tango = undefined;
                zulu = undefined;
                if(!mike) { _fun116079_ip = 375; continue _fun116079 }
 67:
                mike = _closure2_slot1;
                mike = mike[report];
                sizing = tango;
                kilo = zulu;
                if(!(yankee !== mike)) { _fun116079_ip = 350; continue _fun116079 }
 88:
                output = _closure1_slot0;
                mike = _closure1_slot1;
                mike = mike[oscar];
                result = output.bind(offset)(mike);
                output = result.isVoiceChannelsSection;
                mike = _closure2_slot2;
                mike = output.bind(result)(report, mike);
                if(mike) { _fun116079_ip = 160; continue _fun116079 }
 124:
                output = _closure1_slot0;
                mike = _closure1_slot1;
                mike = mike[golf];
                mike = output.bind(offset)(mike);
                mike = mike.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                sizing = tango;
                kilo = zulu;
                if(!(!(report < mike))) { _fun116079_ip = 350; continue _fun116079 }
 160:
                output = _closure1_slot0;
                mike = _closure1_slot1;
                mike = mike[verify];
                echo = output.bind(offset)(mike);
                result = echo.getSectionFooterConfig;
                output = _closure2_slot2;
                mike = _closure2_slot3;
                mike = result.bind(echo)(output, mike, report);
                mike = mike.canHaveVoiceSummary;
                sizing = tango;
                kilo = zulu;
                if(!mike) { _fun116079_ip = 350; continue _fun116079 }
 216:
                output = _closure2_slot2;
                mike = output.getNamedCategoryFromSection;
                output = mike.bind(output)(report);
                kilo = zulu;
                sizing = output;
                if(!(options != sizing)) { _fun116079_ip = 350; continue _fun116079 }
 241:
                result = _closure1_slot0;
                mike = _closure1_slot1;
                mike = mike[verify];
                echo = result.bind(offset)(mike);
                result = echo.getSectionFooterActiveVoiceChannels;
                mike = {};
                mike['category'] = output;
                source = _closure1_slot2;
                update = source.getChannelId;
                update = update.bind(source)();
                mike['selectedChannelId'] = update;
                update = source.getVoiceChannelId;
                update = update.bind(source)();
                mike['selectedVoiceChannelId'] = update;
                mike['voiceStates'] = romeo;
                mike = result.bind(echo)(mike);
                result = mike.length;
                sizing = output;
                kilo = mike;
                if(!(yankee !== result)) { _fun116079_ip = 350; continue _fun116079 }
 329:
                result = {};
                result['category'] = output;
                result['activeVoiceChannels'] = mike;
                entity[report] = result;
                sizing = output;
                kilo = mike;
 350:
                report = report + 1;
                mike = _closure2_slot1;
                mike = mike.length;
                tango = sizing;
                zulu = kilo;
                if(report < mike) { _fun116079_ip = 67; continue _fun116079 }
 375:
                return entity;
            }
        };
        backup = oscar;
        foxtrot = tango;
        yankee = zulu;
        entity = backup[report](foxtrot, romeo, yankee, offset, verify);
        return entity;
    };
    zulu['useSectionsWithVoiceSummary'] = mike;
    return entity;
})();