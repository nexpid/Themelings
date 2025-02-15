// app/modules/guild_sidebar/SectionFooterHelpers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: isSectionFooterWithDivider
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golf = argFoo;
            options = argBaz;
            mike = _closure1_slot0;
            entity = _closure1_slot1;
            offset = 4;
            entity = entity[offset];
            verify = undefined;
            entity = mike.bind(verify)(entity);
            entity = entity.SECTION_INDEX_GUILD_ACTIONS;
            if(!(options !== entity)) { _fun00002_ip = 66; continue _fun00001 }
 41:
            mike = golf.getSections;
            entity = false;
            entity = mike.bind(golf)(entity);
            mike = entity[options];
            entity = 0;
            entity = entity === mike;
            _fun00002_ip = 147; continue _fun00001;
 66:
            mike = golf.getGuildActionSection;
            zulu = mike.bind(golf)();
            mike = zulu.getRows;
            tango = mike.bind(zulu)();
            zulu = tango.length;
            mike = 1;
            mike = mike === zulu;
            if(!mike) { _fun00002_ip = 121; continue _fun00001 }
 101:
            zulu = 0;
            tango = tango[zulu];
            zulu = _closure1_slot4;
            zulu = zulu.GUILD_PREMIUM_PROGRESS_BAR;
            mike = tango === zulu;
 121:
            if(mike) { _fun00002_ip = 144; continue _fun00001 }
 124:
            zulu = golf.getGuildActionSection;
            tango = zulu.bind(golf)();
            zulu = tango.isEmpty;
            mike = zulu.bind(tango)();
 144:
            entity = mike;
 147:
            entity = !entity;
            if(!entity) { _fun00002_ip = 294; continue _fun00001 }
 156:
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[offset];
            mike = zulu.bind(verify)(mike);
            mike = mike.SECTION_INDEX_GUILD_ACTIONS;
            mike = options === mike;
            if(mike) { _fun00002_ip = 291; continue _fun00001 }
 186:
            zulu = argBar;
            tango = !zulu;
            zulu = !tango;
            if(tango) { _fun00002_ip = 288; continue _fun00001 }
 198:
            oscar = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[offset];
            tango = oscar.bind(verify)(tango);
            tango = tango.SECTION_INDEX_FAVORITES;
            tango = options === tango;
            if(tango) { _fun00002_ip = 285; continue _fun00001 }
 228:
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            report = report[offset];
            report = oscar.bind(verify)(report);
            report = report.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            report = options !== report;
            if(!report) { _fun00002_ip = 282; continue _fun00001 }
 258:
            oscar = golf.recentsSectionNumber;
            oscar = options === oscar;
            if(oscar) { _fun00002_ip = 279; continue _fun00001 }
 271:
            golf = golf.voiceChannelsSectionNumber;
            oscar = false;
 279:
            report = oscar;
 282:
            tango = report;
 285:
            zulu = tango;
 288:
            mike = zulu;
 291:
            entity = mike;
 294:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo, argBar) { // Original name: isSectionFooterVoiceSummaryEligible
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            zulu = argBar;
            report = _closure1_slot0;
            entity = _closure1_slot1;
            golf = 4;
            entity = entity[golf];
            oscar = undefined;
            entity = report.bind(oscar)(entity);
            entity = entity.SECTION_INDEX_GUILD_ACTIONS;
            entity = zulu === entity;
            if(entity) { _fun00004_ip = 71; continue _fun00003 }
 44:
            options = _closure1_slot0;
            report = _closure1_slot1;
            report = report[golf];
            report = options.bind(oscar)(report);
            report = report.SECTION_INDEX_FAVORITES;
            entity = zulu === report;
 71:
            if(entity) { _fun00004_ip = 101; continue _fun00003 }
 74:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            tango = tango[golf];
            tango = report.bind(oscar)(tango);
            tango = tango.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            entity = zulu === tango;
 101:
            if(entity) { _fun00004_ip = 114; continue _fun00003 }
 104:
            tango = mike.recentsSectionNumber;
            entity = zulu === tango;
 114:
            if(entity) { _fun00004_ip = 127; continue _fun00003 }
 117:
            mike = mike.voiceChannelsSectionNumber;
            entity = zulu === mike;
 127:
            entity = !entity;
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    tango = function(argFoo) { // Original name: getSectionFooterActiveVoiceChannels
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            zulu = mike.category;
            tango = mike.voiceStates;
            var _closure2_slot0 = tango;
            tango = mike.selectedChannelId;
            var _closure2_slot1 = tango;
            mike = mike.selectedVoiceChannelId;
            var _closure2_slot2 = mike;
            report = _closure1_slot2;
            tango = report.isCollapsed;
            mike = zulu.record;
            mike = mike.id;
            tango = tango.bind(report)(mike);
            mike = true;
            if(!(mike === tango)) { _fun00006_ip = 104; continue _fun00005 }
 75:
            mike = zulu.getChannelRecords;
            zulu = mike.bind(zulu)();
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure1_slot3;
                    mike = zulu.can;
                    entity = _closure1_slot5;
                    entity = entity.VIEW_CHANNEL;
                    entity = mike.bind(zulu)(entity, tango);
                    if(entity) { _fun00008_ip = 39; continue _fun00007 }
 35:
                    entity = false;
                    return entity;
 39:
                    mike = _closure2_slot0;
                    entity = tango.id;
                    mike = mike[entity];
                    entity = null;
                    if(!(entity == mike)) { _fun00008_ip = 65; continue _fun00007 }
 61:
                    mike = new Array(0);
 65:
                    report = tango.id;
                    entity = _closure2_slot2;
                    entity = report !== entity;
                    if(!entity) { _fun00008_ip = 94; continue _fun00007 }
 81:
                    tango = tango.id;
                    zulu = _closure2_slot1;
                    entity = tango !== zulu;
 94:
                    if(!entity) { _fun00008_ip = 108; continue _fun00007 }
 97:
                    zulu = mike.length;
                    mike = 0;
                    entity = zulu > mike;
 108:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            _fun00006_ip = 108; continue _fun00005;
 104:
            entity = new Array(0);
 108:
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ChannelListGuildActionRow;
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Permissions;
    var _closure1_slot5 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_sidebar/SectionFooterHelpers.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar, argBaz) { // Original name: getSectionFooterConfig
        report = argFoo;
        tango = argBaz;
        entity = {};
        golf = _closure1_slot6;
        zulu = undefined;
        oscar = argBar;
        oscar = golf.bind(zulu)(report, oscar, tango);
        entity['hasDivider'] = oscar;
        mike = _closure1_slot7;
        mike = mike.bind(zulu)(report, tango);
        entity['canHaveVoiceSummary'] = mike;
        return entity;
    };
    zulu['getSectionFooterConfig'] = report;
    zulu['getSectionFooterActiveVoiceChannels'] = tango;
    mike = function(argFoo) { // Original name: isSectionFooterWithActiveVoiceChannels
        mike = argFoo;
        oscar = mike.category;
        entity = mike.voiceStates;
        report = mike.selectedChannelId;
        tango = mike.selectedVoiceChannelId;
        zulu = _closure1_slot8;
        mike = {};
        mike['category'] = oscar;
        mike['selectedChannelId'] = report;
        mike['selectedVoiceChannelId'] = tango;
        mike['voiceStates'] = entity;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        mike = entity.length;
        entity = 0;
        entity = mike > entity;
        return entity;
    };
    zulu['isSectionFooterWithActiveVoiceChannels'] = mike;
    return entity;
})();