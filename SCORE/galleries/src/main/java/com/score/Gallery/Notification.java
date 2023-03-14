/*
 * Copyright 2022 Convexus Protocol
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.score.Gallery;

import java.math.BigInteger;
import score.ObjectReader;
import score.ObjectWriter;

public class Notification {
  String title;
  String message;

  public Notification(String _title, String _message) {
    this.title = _title;
    this.message = _message;
  }

  public static void writeObject(ObjectWriter w, Notification _notification) {
    w.beginList(2);
    w.write(_notification.title);
    w.write(_notification.message);
    w.end();
  }

  public static Notification readObject(ObjectReader r) {
    r.beginList();
    Notification n = new Notification(r.readString(), r.readString());
    r.end();
    return n;
  }
}
