// app/modules/forums/native/posts/ForumPostContainer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    option = tangon.bind(entity)(golfie);
    var _closure1_slot3 = option;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    golfie = verify.createStyles;
    tangon = {};
    yankee = 12;
    offset = {'position': 'relative', 'minHeight': 110, 'padding': 12};
    tangon['childContainer'] = offset;
    offset = {};
    offset['marginBottom'] = yankee;
    tangon['card'] = offset;
    offset = {};
    offset['marginBottom'] = yankee;
    yankee = 4;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_PRIMARY;
    offset['backgroundColor'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.radii;
    yankee = yankee.md;
    offset['borderRadius'] = yankee;
    yankee = 'hidden';
    offset['overflow'] = yankee;
    tangon['disabledContainer'] = offset;
    tangon = golfie.bind(verify)(tangon);
    var _closure1_slot6 = tangon;
    golfie = option.createContext;
    tangon = 5;
    tangon = oscard[tangon];
    offset = report.bind(entity)(tangon);
    verify = offset.createFakeSharedValue;
    tangon = false;
    tangon = verify.bind(offset)(tangon);
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forums/native/posts/ForumPostContainer.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useForumPostContainerPressedIn
        zuuluu = _closure1_slot3;
        michal = zuuluu.useContext;
        entity = _closure1_slot7;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['useForumPostContainerPressedIn'] = tangon;
    tangon = function(argFoo) { // Original name: ForumPostPressableContainer
        entity = argFoo;
        report = entity.threadId;
        verify = entity.children;
        kiloes = entity.style;
        zuuluu = _closure1_slot6;
        tangon = undefined;
        backup = zuuluu.bind(tangon)();
        option = _closure1_slot0;
        sizing = _closure1_slot2;
        zuuluu = 6;
        zuuluu = sizing[zuuluu];
        golfie = option.bind(tangon)(zuuluu);
        oscard = golfie.useSharedValue;
        zuuluu = false;
        oscard = oscard.bind(golfie)(zuuluu);
        var _closure2_slot0 = oscard;
        offset = _closure1_slot3;
        golfie = offset.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            entity = {};
            zuuluu = function() { // Original name: onPressIn
                zuuluu = _closure2_slot0;
                michal = zuuluu.set;
                entity = true;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity['onPressIn'] = zuuluu;
            michal = function() { // Original name: onPressOut
                zuuluu = _closure2_slot0;
                michal = zuuluu.set;
                entity = false;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity['onPressOut'] = michal;
            return entity;
        };
        michal = golfie.bind(offset)(michal, zuuluu);
        romeon = michal.onPressIn;
        yankee = michal.onPressOut;
        zuuluu = _closure1_slot1;
        michal = 7;
        michal = sizing[michal];
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = {};
        michal['threadId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        foxtra = michal.onTapPost;
        offset = michal.onLongTapPost;
        zuuluu = _closure1_slot5;
        report = _closure1_slot4;
        michal = {};
        golfie = backup.card;
        michal['style'] = golfie;
        golfie = 8;
        golfie = sizing[golfie];
        golfie = option.bind(tangon)(golfie);
        option = golfie.Card;
        golfie = {};
        sizing = backup.childContainer;
        backup = new Array(2);
        backup[0] = sizing;
        backup[1] = kiloes;
        golfie['style'] = backup;
        backup = 'button';
        golfie['accessibilityRole'] = backup;
        golfie['onPress'] = foxtra;
        golfie['onPressIn'] = romeon;
        golfie['onPressOut'] = yankee;
        golfie['onLongPress'] = offset;
        offset = 130;
        golfie['unstable_pressDelay'] = offset;
        golfie['children'] = verify;
        golfie = zuuluu.bind(tangon)(option, golfie);
        michal['children'] = golfie;
        report = zuuluu.bind(tangon)(report, michal);
        entity = _closure1_slot7;
        michal = entity.Provider;
        entity = {};
        entity['value'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['ForumPostPressableContainer'] = tangon;
    michal = function(argFoo) { // Original name: ForumPostDisabledContainer
        entity = argFoo;
        report = entity.children;
        golfie = entity.style;
        michal = _closure1_slot6;
        tangon = undefined;
        oscard = michal.bind(tangon)();
        zuuluu = _closure1_slot5;
        michal = _closure1_slot4;
        entity = {};
        option = oscard.disabledContainer;
        oscard = new Array(2);
        oscard[0] = option;
        oscard[1] = golfie;
        entity['style'] = oscard;
        oscard = 'none';
        entity['pointerEvents'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['ForumPostDisabledContainer'] = michal;
    return entity;
})();