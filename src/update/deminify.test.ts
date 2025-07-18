import { write } from "bun";
import { deminify } from "./deminify";

const SNIPPET = `r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
    r4 = a1;
    r2 = a5;
    r5 = a6;
    var _closure1_slot0 = r4;
    r0 = a2;
    var _closure1_slot1 = r0;
    var _closure1_slot2 = r5;
    r0 = global;
    r7 = r0.Object;
    r6 = r7.defineProperty;
    r1 = {};
    r0 = true;
    r1['value'] = r0;
    r0 = '__esModule';
    r0 = r6.bind(r7)(r2, r0, r1);
    r0 = 0;
    r6 = r5[r0];
    r1 = a3;
    r0 = undefined;
    r1 = r1.bind(r0)(r6);
    r1 = 1;
    r1 = r5[r1];
    r1 = r4.bind(r0)(r1);
    r1 = r1.jsx;
    var _closure1_slot3 = r1;
    r1 = {};
    r6 = function(a0) { // Original name: openLazy, environment: r3
        _fun32591: for(var _fun32591_ip = 0; ; ) switch(_fun32591_ip) {
case 0:
            r3 = a0;
            r2 = r3.importer;
            r4 = r3.hideActionSheet;
            r1 = undefined;
            if(!(r4 === r1)) { _fun32591_ip = 25; continue _fun32591 }
case 23:
            r4 = true;
case 25:
            var _closure2_slot0 = r4;
            r3 = r3.isDismissable;
            if(!(r3 === r1)) { _fun32591_ip = 41; continue _fun32591 }
case 39:
            r3 = false;
case 41:
            var _closure2_slot1 = r3;
            r2 = r2.bind(r1)();
            r1 = r2.then;
            r0 = function(a0) { // Environment: r0
                _fun32592: for(var _fun32592_ip = 0; ; ) switch(_fun32592_ip) {
case 0:
                    r0 = _closure2_slot0;
                    if(!r0) { _fun32592_ip = 45; continue _fun32592 }
case 10:
                    r2 = _closure1_slot1;
                    r1 = _closure1_slot2;
                    r0 = 2;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    r0 = r1.hideActionSheet;
                    r0 = r0.bind(r1)();
case 45:
                    r2 = _closure1_slot1;
                    r1 = _closure1_slot2;
                    r0 = 3;
                    r1 = r1[r0];
                    r0 = undefined;
                    r3 = r2.bind(r0)(r1);
                    r2 = r3.dispatch;
                    r1 = {};
                    r5 = 'ALERT_OPEN';
                    r1['type'] = r5;
                    r5 = a0;
                    r1['alert'] = r5;
                    r4 = _closure2_slot1;
                    r1['isDismissable'] = r4;
                    r1 = r2.bind(r3)(r1);
                    return r0;
                }
            };
            r0 = r1.bind(r2)(r0);
            return r0;
        }
    };
    r1['openLazy'] = r6;
    r6 = function() { // Original name: close, environment: r3
        r2 = _closure1_slot1;
        r1 = _closure1_slot2;
        r0 = 3;
        r1 = r1[r0];
        r0 = undefined;
        r3 = r2.bind(r0)(r1);
        r2 = r3.dispatch;
        r1 = {};
        r4 = 'ALERT_CLOSE';
        r1['type'] = r4;
        r1 = r2.bind(r3)(r1);
        return r0;
    };
    r1['close'] = r6;
    r6 = function(a0) { // Original name: show, environment: r3
        _fun32594: for(var _fun32594_ip = 0; ; ) switch(_fun32594_ip) {
case 0:
            r7 = a0;
            r3 = this;
            r5 = r7.hideActionSheet;
            r4 = r7.isDismissable;
            r1 = r7.confirmText;
            r0 = undefined;
            if(!(r1 === r0)) { _fun32594_ip = 90; continue _fun32594 }
case 32:
            r10 = _closure1_slot0;
            r11 = _closure1_slot2;
            r2 = 4;
            r8 = r11[r2];
            r8 = r10.bind(r0)(r8);
            r9 = r8.intl;
            r8 = r9.string;
            r2 = r11[r2];
            r2 = r10.bind(r0)(r2);
            r2 = r2.t;
            r2 = r2.BddRzc;
            r1 = r8.bind(r9)(r2);
case 90:
            var _closure2_slot0 = r1;
            r2 = {'hideActionSheet': 0, 'isDismissable': 0, 'confirmText': 0};
            r13 = null;
            r14 = r2;
            r1 = silentSetPrototypeOf(r14, r13);
            r14 = {};
            r13 = r7;
            r12 = r2;
            r1 = copyDataProperties(r14, r13, r12);
            var _closure2_slot1 = r1;
            r2 = r3.openLazy;
            r1 = {};
            r6 = function() { // Original name: importer, environment: r6
                r2 = _closure1_slot0;
                r0 = _closure1_slot2;
                r1 = 6;
                r1 = r0[r1];
                r3 = undefined;
                r2 = r2.bind(r3)(r1);
                r1 = 5;
                r1 = r0[r1];
                r0 = r0.paths;
                r2 = r2.bind(r3)(r1, r0);
                r1 = r2.then;
                r0 = function(a0) { // Environment: r0
                    r1 = a0;
                    r1 = r1.default;
                    var _closure4_slot0 = r1;
                    r0 = function(a0) { // Environment: r0
                        r3 = _closure1_slot3;
                        r2 = _closure4_slot0;
                        r1 = {};
                        r5 = a0;
                        r6 = r1;
                        r0 = copyDataProperties(r6, r5);
                        r5 = _closure2_slot1;
                        r6 = r1;
                        r4 = copyDataProperties(r6, r5);
                        r4 = _closure2_slot0;
                        r0 = 'confirmText';
                        r1[r0] = r4;
                        r0 = undefined;
                        r0 = r3.bind(r0)(r2, r1);
                        return r0;
                    };
                    return r0;
                };
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r1['importer'] = r6;
            r1['hideActionSheet'] = r5;
            r1['isDismissable'] = r4;
            r1 = r2.bind(r3)(r1);
            return r0;
        }
    };
    r1['show'] = r6;
    r3 = function(a0) { // Original name: confirm, environment: r3
        r1 = this;
        var _closure2_slot0 = r1;
        r1 = a0;
        var _closure2_slot1 = r1;
        r1 = global;
        r2 = r1.Promise;
        r1 = r2.prototype;
        r1 = Object.create(r1, {constructor: {value: r2}});
        r3 = function(a0) { // Environment: r0
            r0 = a0;
            var _closure3_slot0 = r0;
            r3 = _closure2_slot0;
            r2 = r3.show;
            r1 = {};
            r0 = function() { // Original name: onConfirm, environment: r5
                r2 = _closure3_slot0;
                r0 = undefined;
                r1 = true;
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r1['onConfirm'] = r0;
            r9 = _closure1_slot0;
            r10 = _closure1_slot2;
            r6 = 4;
            r7 = r10[r6];
            r0 = undefined;
            r7 = r9.bind(r0)(r7);
            r8 = r7.intl;
            r7 = r8.string;
            r6 = r10[r6];
            r6 = r9.bind(r0)(r6);
            r6 = r6.t;
            r6 = r6.ETE/oK;
            r6 = r7.bind(r8)(r6);
            r1['cancelText'] = r6;
            r5 = function() { // Original name: onCancel, environment: r5
                r2 = _closure3_slot0;
                r0 = undefined;
                r1 = false;
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r1['onCancel'] = r5;
            r11 = _closure2_slot1;
            r12 = r1;
            r4 = copyDataProperties(r12, r11);
            r1 = r2.bind(r3)(r1);
            return r0;
        };
        r4 = r1;
        r0 = new r4[r2](r3, r2);
        r0 = r0 instanceof Object ? r0 : r1;
        return r0;
    };
    r1['confirm'] = r3;
    r3 = 7;
    r3 = r5[r3];
    r5 = r4.bind(r0)(r3);
    r4 = r5.fileFinishedImporting;
    r3 = 'actions/native/AlertActionCreators.tsx';
    r3 = r4.bind(r5)(r3);
    r2['default'] = r1;
    return r0;
};`;

await write("temp/deminified.js", deminify(SNIPPET, "actions/native/AlertActionCreators.js").res);
