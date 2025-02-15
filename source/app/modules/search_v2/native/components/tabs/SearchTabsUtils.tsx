// app/modules/search_v2/native/components/tabs/SearchTabsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo, argBar) { // Original name: isSearchTabVisible
        _fun112591: for(var _fun112591_ip = 0; ; ) switch(_fun112591_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            mike = _closure1_slot5;
            mike = mike.MEMBERS;
            if(!(mike !== tango)) { _fun112591_ip = 177; continue _fun112591 }
 26:
            mike = _closure1_slot5;
            mike = mike.RECENT;
            if(!(mike !== tango)) { _fun112591_ip = 142; continue _fun112591 }
 40:
            mike = _closure1_slot5;
            mike = mike.GUILD_CHANNELS;
            if(!(mike !== tango)) { _fun112591_ip = 107; continue _fun112591 }
 54:
            mike = _closure1_slot5;
            mike = mike.PEOPLE;
            if(!(mike !== tango)) { _fun112591_ip = 72; continue _fun112591 }
 68:
            mike = true;
            return mike;
 72:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 2;
            tango = tango[mike];
            mike = undefined;
            tango = report.bind(mike)(tango);
            mike = tango.getIsPeopleTabVisible;
            mike = mike.bind(tango)(zulu);
            return mike;
 107:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 2;
            tango = tango[mike];
            mike = undefined;
            tango = report.bind(mike)(tango);
            mike = tango.getIsChannelsTabVisible;
            mike = mike.bind(tango)(zulu);
            return mike;
 142:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 2;
            tango = tango[mike];
            mike = undefined;
            tango = report.bind(mike)(tango);
            mike = tango.getIsRecentsTabVisible;
            mike = mike.bind(tango)(zulu);
            return mike;
 177:
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.getIsMembersTabVisible;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot15 = tango;
    entity = function(argFoo) { // Original name: getEligibleSearchResultTabs
        _fun112592: for(var _fun112592_ip = 0; ; ) switch(_fun112592_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            tango = mike.type;
            zulu = _closure1_slot14;
            zulu = zulu.GUILD_CHANNEL;
            if(!(zulu !== tango)) { _fun112592_ip = 117; continue _fun112592 }
 31:
            zulu = _closure1_slot14;
            zulu = zulu.CHANNEL;
            if(!(zulu !== tango)) { _fun112592_ip = 111; continue _fun112592 }
 45:
            zulu = _closure1_slot14;
            zulu = zulu.THREAD;
            if(!(zulu !== tango)) { _fun112592_ip = 105; continue _fun112592 }
 59:
            zulu = _closure1_slot14;
            zulu = zulu.GUILD;
            if(!(zulu !== tango)) { _fun112592_ip = 99; continue _fun112592 }
 73:
            zulu = _closure1_slot14;
            zulu = zulu.DMS;
            if(!(zulu !== tango)) { _fun112592_ip = 93; continue _fun112592 }
 87:
            zulu = new Array(0);
            _fun112592_ip = 121; continue _fun112592;
 93:
            zulu = _closure1_slot4;
            _fun112592_ip = 121; continue _fun112592;
 99:
            zulu = _closure1_slot10;
            _fun112592_ip = 121; continue _fun112592;
 105:
            zulu = _closure1_slot7;
            _fun112592_ip = 121; continue _fun112592;
 111:
            zulu = _closure1_slot2;
            _fun112592_ip = 121; continue _fun112592;
 117:
            zulu = _closure1_slot12;
 121:
            mike = zulu.filter;
            entity = function(argFoo) {
                tango = _closure1_slot15;
                zulu = _closure2_slot0;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(zulu, entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    options = report.PRIVATE_CHANNEL_SEARCH_RESULT_TABS;
    var _closure1_slot2 = options;
    options = report.DMS_INITIAL_TABS;
    var _closure1_slot3 = options;
    options = report.DMS_SEARCH_RESULT_TABS;
    var _closure1_slot4 = options;
    options = report.SearchTabs;
    var _closure1_slot5 = options;
    options = report.PRIVATE_CHANNEL_INITIAL_TABS;
    var _closure1_slot6 = options;
    options = report.THREAD_SEARCH_RESULT_TABS;
    var _closure1_slot7 = options;
    options = report.THREAD_INITIAL_TABS;
    var _closure1_slot8 = options;
    options = report.GUILD_INITIAL_TABS_V2;
    var _closure1_slot9 = options;
    options = report.GUILD_SEARCH_RESULT_TABS_V2;
    var _closure1_slot10 = options;
    options = report.GUILD_CHANNEL_INITIAL_TABS_V2;
    var _closure1_slot11 = options;
    options = report.GUILD_CHANNEL_SEARCH_RESULT_TABS_V2;
    var _closure1_slot12 = options;
    report = report.GUILD_CHANNEL_INITIAL_TABS_V2_WITH_THREADS;
    var _closure1_slot13 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.SearchTypes;
    var _closure1_slot14 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/search_v2/native/components/tabs/SearchTabsUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['isSearchTabVisible'] = tango;
    tango = function(argFoo) { // Original name: getSearchTabsKey
        zulu = argFoo;
        mike = zulu.join;
        entity = '-';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getSearchTabsKey'] = tango;
    tango = function(argFoo) { // Original name: getTabTitle
        _fun112595: for(var _fun112595_ip = 0; ; ) switch(_fun112595_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot5;
            mike = mike.RECENT;
            if(!(mike !== zulu)) { _fun112595_ip = 705; continue _fun112595 }
 23:
            mike = _closure1_slot5;
            mike = mike.MESSAGES;
            if(!(mike !== zulu)) { _fun112595_ip = 646; continue _fun112595 }
 40:
            mike = _closure1_slot5;
            mike = mike.PEOPLE;
            if(!(mike !== zulu)) { _fun112595_ip = 587; continue _fun112595 }
 57:
            mike = _closure1_slot5;
            mike = mike.MEDIA;
            if(!(mike !== zulu)) { _fun112595_ip = 528; continue _fun112595 }
 74:
            mike = _closure1_slot5;
            mike = mike.PINS;
            if(!(mike !== zulu)) { _fun112595_ip = 469; continue _fun112595 }
 91:
            mike = _closure1_slot5;
            mike = mike.LINKS;
            if(!(mike !== zulu)) { _fun112595_ip = 410; continue _fun112595 }
 108:
            mike = _closure1_slot5;
            mike = mike.FILES;
            if(!(mike !== zulu)) { _fun112595_ip = 351; continue _fun112595 }
 125:
            mike = _closure1_slot5;
            mike = mike.GUILD_CHANNELS;
            if(!(mike !== zulu)) { _fun112595_ip = 292; continue _fun112595 }
 142:
            mike = _closure1_slot5;
            mike = mike.MEMBERS;
            if(!(mike !== zulu)) { _fun112595_ip = 233; continue _fun112595 }
 156:
            mike = _closure1_slot5;
            mike = mike.THREADS;
            if(!(mike !== zulu)) { _fun112595_ip = 174; continue _fun112595 }
 170:
            mike = undefined;
            return mike;
 174:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.B2panJ;
            mike = zulu.bind(tango)(mike);
            return mike;
 233:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.9Oq93t;
            mike = zulu.bind(tango)(mike);
            return mike;
 292:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.OGiMXF;
            mike = zulu.bind(tango)(mike);
            return mike;
 351:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.WgVYR0;
            mike = zulu.bind(tango)(mike);
            return mike;
 410:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.DFSvTk;
            mike = zulu.bind(tango)(mike);
            return mike;
 469:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike./MoGoK;
            mike = zulu.bind(tango)(mike);
            return mike;
 528:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.Aw9+/P;
            mike = zulu.bind(tango)(mike);
            return mike;
 587:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.GFd/Iy;
            mike = zulu.bind(tango)(mike);
            return mike;
 646:
            oscar = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.dvZAkp;
            mike = zulu.bind(tango)(mike);
            return mike;
 705:
            report = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 3;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.tWnHcH;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getTabTitle'] = tango;
    tango = function(argFoo) { // Original name: getSearchInitialTabs
        _fun112596: for(var _fun112596_ip = 0; ; ) switch(_fun112596_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            tango = entity.type;
            zulu = _closure1_slot14;
            zulu = zulu.THREAD;
            if(!(zulu !== tango)) { _fun112596_ip = 203; continue _fun112596 }
 34:
            zulu = _closure1_slot14;
            zulu = zulu.CHANNEL;
            if(!(zulu !== tango)) { _fun112596_ip = 197; continue _fun112596 }
 51:
            zulu = _closure1_slot14;
            zulu = zulu.GUILD_CHANNEL;
            if(!(zulu !== tango)) { _fun112596_ip = 128; continue _fun112596 }
 65:
            zulu = _closure1_slot14;
            zulu = zulu.GUILD;
            if(!(zulu !== tango)) { _fun112596_ip = 105; continue _fun112596 }
 79:
            zulu = _closure1_slot14;
            zulu = zulu.DMS;
            if(!(zulu !== tango)) { _fun112596_ip = 99; continue _fun112596 }
 93:
            zulu = new Array(0);
            return zulu;
 99:
            zulu = _closure1_slot3;
            return zulu;
 105:
            report = _closure1_slot9;
            tango = report.filter;
            zulu = function(argFoo) {
                tango = _closure1_slot15;
                zulu = _closure2_slot0;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(zulu, entity);
                return entity;
            };
            zulu = tango.bind(report)(zulu);
            return zulu;
 128:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 4;
            tango = tango[zulu];
            zulu = undefined;
            report = report.bind(zulu)(tango);
            tango = report.isChannelDetailsHeaderExperimentV2Enabled;
            zulu = 'getSearchInitialTabs';
            zulu = tango.bind(report)(zulu);
            if(zulu) { _fun112596_ip = 174; continue _fun112596 }
 168:
            tango = _closure1_slot11;
            _fun112596_ip = 178; continue _fun112596;
 174:
            tango = _closure1_slot13;
 178:
            zulu = tango.filter;
            mike = function(argFoo) {
                tango = _closure1_slot15;
                zulu = _closure2_slot0;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(zulu, entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            return mike;
 197:
            mike = _closure1_slot6;
            return mike;
 203:
            entity = _closure1_slot8;
            return entity;
        }
    };
    zulu['getSearchInitialTabs'] = tango;
    tango = function(argFoo, argBar) { // Original name: getSearchResultTabs
        mike = argBar;
        var _closure2_slot0 = mike;
        tango = _closure1_slot16;
        zulu = undefined;
        mike = argFoo;
        zulu = tango.bind(zulu)(mike);
        mike = zulu.filter;
        entity = function(argFoo) {
            _fun112600: for(var _fun112600_ip = 0; ; ) switch(_fun112600_ip) {
 0:
                mike = _closure2_slot0;
                entity = argFoo;
                zulu = mike[entity];
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun112600_ip = 29; continue _fun112600 }
 23:
                mike = 0;
                entity = mike !== zulu;
 29:
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getSearchResultTabs'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: getSearchLoadingTabs
        _fun112601: for(var _fun112601_ip = 0; ; ) switch(_fun112601_ip) {
 0:
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = argBaz;
            var _closure2_slot1 = entity;
            tango = _closure1_slot16;
            zulu = undefined;
            entity = argFoo;
            entity = tango.bind(zulu)(entity);
            zulu = entity.filter;
            mike = function(argFoo) {
                _fun112602: for(var _fun112602_ip = 0; ; ) switch(_fun112602_ip) {
 0:
                    entity = _closure2_slot1;
                    zulu = !entity;
                    entity = !zulu;
                    if(!zulu) { _fun112602_ip = 33; continue _fun112602 }
 16:
                    tango = _closure2_slot0;
                    zulu = tango.includes;
                    mike = argFoo;
                    entity = zulu.bind(tango)(mike);
 33:
                    return entity;
                }
            };
            mike = zulu.bind(entity)(mike);
            tango = mike.length;
            zulu = 0;
            if(!(zulu !== tango)) { _fun112601_ip = 64; continue _fun112601 }
 61:
            entity = mike;
 64:
            return entity;
        }
    };
    zulu['getSearchLoadingTabs'] = mike;
    return entity;
})();