// app/modules/search_v2/native/components/tabs/SearchTabsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo, argBar) { // Original name: isSearchTabVisible
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            michal = _closure1_slot5;
            michal = michal.MEMBERS;
            if(!(michal !== tangon)) { _fun00002_ip = 233; continue _fun00001 }
 26:
            michal = _closure1_slot5;
            michal = michal.RECENT;
            if(!(michal !== tangon)) { _fun00002_ip = 198; continue _fun00001 }
 43:
            michal = _closure1_slot5;
            michal = michal.GUILD_CHANNELS;
            if(!(michal !== tangon)) { _fun00002_ip = 163; continue _fun00001 }
 57:
            michal = _closure1_slot5;
            michal = michal.PEOPLE;
            if(!(michal !== tangon)) { _fun00002_ip = 128; continue _fun00001 }
 71:
            michal = _closure1_slot5;
            michal = michal.THREADS;
            if(!(michal !== tangon)) { _fun00002_ip = 89; continue _fun00001 }
 85:
            michal = true;
            return michal;
 89:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 3;
            tangon = tangon[michal];
            michal = undefined;
            report = report.bind(michal)(tangon);
            tangon = report.isChannelDetailsHeaderExperimentV2Enabled;
            michal = 'getSearchInitialTabs';
            michal = tangon.bind(report)(michal);
            return michal;
 128:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 2;
            tangon = tangon[michal];
            michal = undefined;
            tangon = report.bind(michal)(tangon);
            michal = tangon.getIsPeopleTabVisible;
            michal = michal.bind(tangon)(zuuluu);
            return michal;
 163:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 2;
            tangon = tangon[michal];
            michal = undefined;
            tangon = report.bind(michal)(tangon);
            michal = tangon.getIsChannelsTabVisible;
            michal = michal.bind(tangon)(zuuluu);
            return michal;
 198:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 2;
            tangon = tangon[michal];
            michal = undefined;
            tangon = report.bind(michal)(tangon);
            michal = tangon.getIsRecentsTabVisible;
            michal = michal.bind(tangon)(zuuluu);
            return michal;
 233:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 2;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.getIsMembersTabVisible;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot14 = tangon;
    entity = function(argFoo) { // Original name: getEligibleSearchResultTabs
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            tangon = michal.type;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.GUILD_CHANNEL;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 117; continue _fun00003 }
 31:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.CHANNEL;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 111; continue _fun00003 }
 45:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.THREAD;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 105; continue _fun00003 }
 59:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.GUILD;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 99; continue _fun00003 }
 73:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.DMS;
            if(!(zuuluu !== tangon)) { _fun00004_ip = 93; continue _fun00003 }
 87:
            zuuluu = new Array(0);
            _fun00004_ip = 121; continue _fun00003;
 93:
            zuuluu = _closure1_slot4;
            _fun00004_ip = 121; continue _fun00003;
 99:
            zuuluu = _closure1_slot10;
            _fun00004_ip = 121; continue _fun00003;
 105:
            zuuluu = _closure1_slot7;
            _fun00004_ip = 121; continue _fun00003;
 111:
            zuuluu = _closure1_slot2;
            _fun00004_ip = 121; continue _fun00003;
 117:
            zuuluu = _closure1_slot12;
 121:
            michal = zuuluu.filter;
            entity = function(argFoo) {
                tangon = _closure1_slot14;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(zuuluu, entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    option = report.PRIVATE_CHANNEL_SEARCH_RESULT_TABS;
    var _closure1_slot2 = option;
    option = report.DMS_INITIAL_TABS;
    var _closure1_slot3 = option;
    option = report.DMS_SEARCH_RESULT_TABS;
    var _closure1_slot4 = option;
    option = report.SearchTabs;
    var _closure1_slot5 = option;
    option = report.PRIVATE_CHANNEL_INITIAL_TABS;
    var _closure1_slot6 = option;
    option = report.THREAD_SEARCH_RESULT_TABS;
    var _closure1_slot7 = option;
    option = report.THREAD_INITIAL_TABS;
    var _closure1_slot8 = option;
    option = report.GUILD_INITIAL_TABS;
    var _closure1_slot9 = option;
    option = report.GUILD_SEARCH_RESULT_TABS;
    var _closure1_slot10 = option;
    option = report.GUILD_CHANNEL_INITIAL_TABS;
    var _closure1_slot11 = option;
    report = report.GUILD_CHANNEL_SEARCH_RESULT_TABS;
    var _closure1_slot12 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.SearchTypes;
    var _closure1_slot13 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/search_v2/native/components/tabs/SearchTabsUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['isSearchTabVisible'] = tangon;
    tangon = function(argFoo) { // Original name: getSearchTabsKey
        zuuluu = argFoo;
        michal = zuuluu.join;
        entity = '-';
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getSearchTabsKey'] = tangon;
    tangon = function(argFoo) { // Original name: getTabTitle
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot5;
            michal = michal.RECENT;
            if(!(michal !== zuuluu)) { _fun00006_ip = 717; continue _fun00005 }
 23:
            michal = _closure1_slot5;
            michal = michal.MESSAGES;
            if(!(michal !== zuuluu)) { _fun00006_ip = 656; continue _fun00005 }
 40:
            michal = _closure1_slot5;
            michal = michal.PEOPLE;
            if(!(michal !== zuuluu)) { _fun00006_ip = 595; continue _fun00005 }
 57:
            michal = _closure1_slot5;
            michal = michal.MEDIA;
            if(!(michal !== zuuluu)) { _fun00006_ip = 534; continue _fun00005 }
 74:
            michal = _closure1_slot5;
            michal = michal.PINS;
            if(!(michal !== zuuluu)) { _fun00006_ip = 473; continue _fun00005 }
 91:
            michal = _closure1_slot5;
            michal = michal.LINKS;
            if(!(michal !== zuuluu)) { _fun00006_ip = 412; continue _fun00005 }
 108:
            michal = _closure1_slot5;
            michal = michal.FILES;
            if(!(michal !== zuuluu)) { _fun00006_ip = 351; continue _fun00005 }
 125:
            michal = _closure1_slot5;
            michal = michal.GUILD_CHANNELS;
            if(!(michal !== zuuluu)) { _fun00006_ip = 292; continue _fun00005 }
 142:
            michal = _closure1_slot5;
            michal = michal.MEMBERS;
            if(!(michal !== zuuluu)) { _fun00006_ip = 233; continue _fun00005 }
 156:
            michal = _closure1_slot5;
            michal = michal.THREADS;
            if(!(michal !== zuuluu)) { _fun00006_ip = 174; continue _fun00005 }
 170:
            michal = undefined;
            return michal;
 174:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.B2panJ;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 233:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.9Oq93t;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 292:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.OGiMXF;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 351:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.WgVYR0;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 412:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.DFSvTk;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 473:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal./MoGoK;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 534:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.Aw9+/P;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 595:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.GFd/Iy;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 656:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.dvZAkp;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 717:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 4;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.tWnHcH;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getTabTitle'] = tangon;
    tangon = function(argFoo) { // Original name: getSearchInitialTabs
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = entity.type;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.THREAD;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 151; continue _fun00007 }
 31:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.CHANNEL;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 145; continue _fun00007 }
 45:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.GUILD_CHANNEL;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 122; continue _fun00007 }
 59:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.GUILD;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 99; continue _fun00007 }
 73:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.DMS;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 93; continue _fun00007 }
 87:
            zuuluu = new Array(0);
            return zuuluu;
 93:
            zuuluu = _closure1_slot3;
            return zuuluu;
 99:
            report = _closure1_slot9;
            tangon = report.filter;
            zuuluu = function(argFoo) {
                tangon = _closure1_slot14;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(zuuluu, entity);
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 122:
            tangon = _closure1_slot11;
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                tangon = _closure1_slot14;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(zuuluu, entity);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 145:
            michal = _closure1_slot6;
            return michal;
 151:
            entity = _closure1_slot8;
            return entity;
        }
    };
    zuuluu['getSearchInitialTabs'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getSearchResultTabs
        michal = argBar;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot15;
        zuuluu = undefined;
        michal = argFoo;
        zuuluu = tangon.bind(zuuluu)(michal);
        michal = zuuluu.filter;
        entity = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = _closure2_slot0;
                entity = argFoo;
                zuuluu = michal[entity];
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00010_ip = 29; continue _fun00009 }
 23:
                michal = 0;
                entity = michal !== zuuluu;
 29:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['getSearchResultTabs'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: getSearchLoadingTabs
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argBar;
            var _closure2_slot0 = entity;
            entity = argBaz;
            var _closure2_slot1 = entity;
            tangon = _closure1_slot15;
            zuuluu = undefined;
            entity = argFoo;
            entity = tangon.bind(zuuluu)(entity);
            zuuluu = entity.filter;
            michal = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot1;
                    zuuluu = !entity;
                    entity = !zuuluu;
                    if(!zuuluu) { _fun00014_ip = 33; continue _fun00013 }
 16:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.includes;
                    michal = argFoo;
                    entity = zuuluu.bind(tangon)(michal);
 33:
                    return entity;
                }
            };
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.length;
            zuuluu = 0;
            if(!(zuuluu !== tangon)) { _fun00012_ip = 64; continue _fun00011 }
 61:
            entity = michal;
 64:
            return entity;
        }
    };
    zuuluu['getSearchLoadingTabs'] = michal;
    return entity;
})();