// app/modules/chat_input/native/ChatBottomManagerUIStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function(argFoo, argBar) { // Original name: getKey
        entity = global;
        entity = entity.HermesInternal;
        report = entity.concat;
        tangon = '';
        zuuluu = argFoo;
        michal = ':';
        entity = argBar;
        entity = report.bind(tangon)(zuuluu, michal, entity);
        return entity;
    };
    var _closure1_slot3 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    report = tangon.createZustandStore;
    tangon = function() {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = {'chatInputContainerHeight': null, 'showingAutoComplete': false, 'showingExpressionSuggestions': false};
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 1;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            report = michal.Storage;
            tangon = report.get;
            zuuluu = 'chatInputContainerHeight';
            michal = 0;
            zuuluu = tangon.bind(report)(zuuluu, michal);
            tangon = null;
            tangon = tangon != zuuluu;
            if(!tangon) { _fun00002_ip = 70; continue _fun00001 }
 67:
            michal = zuuluu;
 70:
            entity['chatInputContainerHeight'] = michal;
            michal = global;
            michal = michal.Set;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            option = zuuluu;
            michal = new option[michal](golfie);
            michal = michal instanceof Object ? michal : zuuluu;
            entity['shouldShowJumpToPresentButton'] = michal;
            return entity;
        }
    };
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/chat_input/native/ChatBottomManagerUIStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = function(argFoo) { // Original name: updateChatInputContainerHeight
        report = argFoo;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        oscard = zuuluu.Storage;
        tangon = oscard.set;
        zuuluu = 'chatInputContainerHeight';
        zuuluu = tangon.bind(oscard)(zuuluu, report);
        tangon = _closure1_slot2;
        zuuluu = tangon.setState;
        michal = {};
        michal['chatInputContainerHeight'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateChatInputContainerHeight'] = tangon;
    tangon = function(argFoo) { // Original name: updateShowingAutoComplete
        zuuluu = _closure1_slot2;
        michal = zuuluu.setState;
        entity = {};
        tangon = argFoo;
        entity['showingAutoComplete'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['updateShowingAutoComplete'] = tangon;
    tangon = function(argFoo) { // Original name: updateShowingExpressionSuggestions
        zuuluu = _closure1_slot2;
        michal = zuuluu.setState;
        entity = {};
        tangon = argFoo;
        entity['showingExpressionSuggestions'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['updateShowingExpressionSuggestions'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: updateShouldShowJumpToPresentButton
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argBaz;
            report = _closure1_slot2;
            tangon = report.getField;
            entity = 'shouldShowJumpToPresentButton';
            golfie = tangon.bind(report)(entity);
            oscard = _closure1_slot3;
            entity = undefined;
            report = argFoo;
            tangon = argBar;
            tangon = oscard.bind(entity)(report, tangon);
            report = golfie.has;
            report = report.bind(golfie)(tangon);
            if(!(report !== zuuluu)) { _fun00004_ip = 135; continue _fun00003 }
 57:
            report = global;
            report = report.Set;
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            offset = oscard;
            verify = golfie;
            report = new offset[report](verify, option);
            report = report instanceof Object ? report : oscard;
            if(zuuluu) { _fun00004_ip = 103; continue _fun00003 }
 91:
            zuuluu = report.delete;
            zuuluu = zuuluu.bind(report)(tangon);
            _fun00004_ip = 113; continue _fun00003;
 103:
            zuuluu = report.add;
            zuuluu = zuuluu.bind(report)(tangon);
 113:
            tangon = _closure1_slot2;
            zuuluu = tangon.setState;
            michal = {};
            michal['shouldShowJumpToPresentButton'] = report;
            michal = zuuluu.bind(tangon)(michal);
 135:
            return entity;
        }
    };
    zuuluu['updateShouldShowJumpToPresentButton'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useShouldShowJumpToPresentButton
        tangon = _closure1_slot2;
        zuuluu = tangon.useField;
        michal = 'shouldShowJumpToPresentButton';
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.has;
        oscard = _closure1_slot3;
        report = undefined;
        tangon = argFoo;
        entity = argBar;
        entity = oscard.bind(report)(tangon, entity);
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useShouldShowJumpToPresentButton'] = michal;
    return entity;
})();