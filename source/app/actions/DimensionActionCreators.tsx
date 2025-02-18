// app/actions/DimensionActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    michal = argBaz;
    var _closure1_slot0 = michal;
    var _closure1_slot1 = tangon;
    michal = global;
    golfie = michal.Object;
    oscard = golfie.defineProperty;
    report = {};
    michal = true;
    report['value'] = michal;
    michal = '__esModule';
    michal = oscard.bind(golfie)(zuuluu, michal, report);
    michal = {};
    report = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: updateChannelDimensions
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        entity = argCor;
        var _closure2_slot3 = entity;
        entity = argGra;
        var _closure2_slot4 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 0;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.wait;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 0;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.dispatch;
                zuuluu = {};
                michal = 'UPDATE_CHANNEL_DIMENSIONS';
                zuuluu['type'] = michal;
                oscard = _closure2_slot0;
                zuuluu['channelId'] = oscard;
                oscard = _closure2_slot1;
                zuuluu['scrollTop'] = oscard;
                oscard = _closure2_slot2;
                zuuluu['scrollHeight'] = oscard;
                oscard = _closure2_slot3;
                zuuluu['offsetHeight'] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = _closure2_slot4;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00002_ip = 100; continue _fun00001 }
 92:
                michal = _closure2_slot4;
                michal = michal.bind(entity)();
 100:
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['updateChannelDimensions'] = report;
    report = function(argFoo, argBar) { // Original name: updateChannelListScroll
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = arguments[2];
            entity = undefined;
            if(!(report === entity)) { _fun00004_ip = 13; continue _fun00003 }
 9:
            report = new Array(0);
 13:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 0;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'UPDATE_CHANNEL_LIST_DIMENSIONS';
            michal['type'] = oscard;
            oscard = argFoo;
            michal['guildId'] = oscard;
            oscard = argBar;
            michal['scrollTop'] = oscard;
            michal['channelIds'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['updateChannelListScroll'] = report;
    report = function(argFoo, argBar) { // Original name: channelListScrollTo
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'UPDATE_CHANNEL_LIST_DIMENSIONS';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['scrollTo'] = report;
        report = new Array(0);
        michal['channelIds'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['channelListScrollTo'] = report;
    report = function(argFoo) { // Original name: clearChannelListScrollTo
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {'type': 'UPDATE_CHANNEL_LIST_DIMENSIONS', 'guildId': null, 'scrollTo': null};
        report = argFoo;
        michal['guildId'] = report;
        report = new Array(0);
        michal['channelIds'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['clearChannelListScrollTo'] = report;
    report = function(argFoo, argBar) { // Original name: clearChannelDimensions
        report = this;
        tangon = report.updateChannelDimensions;
        offset = argFoo;
        oscard = argBar;
        yankee = report;
        verify = null;
        option = null;
        golfie = null;
        entity = yankee[tangon](offset, verify, option, golfie, oscard, report);
        entity = undefined;
        return entity;
    };
    michal['clearChannelDimensions'] = report;
    entity = function(argFoo) { // Original name: updateGuildListScrollTo
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'UPDATE_GUILD_LIST_DIMENSIONS';
        michal['type'] = report;
        report = argFoo;
        michal['scrollTop'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['updateGuildListScrollTo'] = entity;
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/DimensionActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();